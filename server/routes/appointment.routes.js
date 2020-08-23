const express = require('express');
const router = express.Router();

const Appointment = require('../models/Appointment.model')
const Patient = require('../models/Patient.model')
const NodemailerService = require('../services/nodemailer.service')
const moment = require('moment')

// GET appointment
router.get('/', (req, res, next) => {
    let options = {}
    let query = req.query;

    query.patientId ? options['patientId'] = req.query.patientId : null

    query.old ? null : options['date'] = { $gte: new Date() }

    Appointment.find(options).populate('patientId').sort({ date: 'asc' })
        .then(results => res.json(results))
        .catch(err => console.log(err))
});

// POST appointment available hours
router.post('/available-hours', (req, res, next) => {
    const { date } = req.body
    const availableHours = ['10:00', '11:00', '12:00', '13:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
    const day = moment(date).startOf('day');
    const nextDay = moment(day).endOf('day');

    let options = {
        date: {
            $gte: day, $lt: nextDay
        }
    }

    Appointment.find(options)
        .then(results => {
            const usedHours = results.map(elem => `${elem.date.getHours()}:00`)
            return res.json(availableHours.filter(elem => !usedHours.includes(elem)))
        })
        .catch(err => console.log({ err }))
});

// GET appointment by reference
router.get('/:reference', (req, res, next) => Appointment.findOne({ reference: req.params.reference }).populate('patientId')
    .then(appointment => res.json(appointment))
    .catch(err => console.log(err))
);


// POST appointment
router.post('/', (req, res, next) => {

    const { name, surname, date, time, motive } = req.body
    let { email } = req.body;
    email = email.toLowerCase()

    let stringDate = new Date(Date.parse(`${date}T${time}+02:00`))

    Patient.findOne({ email })
        .then(patient => {

            if (patient) {
                return patient;
            } else {
                return Patient.create({
                    name,
                    surname,
                    email
                })
            }
        })
        .then(patient => {

            return Appointment.create({
                patientId: patient.id,
                date: stringDate,
                motive,
                reference: Appointment.generateReference(8)
            })
        })
        .then(newAppointment => {
            const nodemailer = new NodemailerService()
            nodemailer.sendEmail(email, 'pending', newAppointment.date, newAppointment.reference)
            res.json({
                message: "Creada la cita satisfactoriamente",
                data: newAppointment
            });
        })
        .catch(err => console.log(err))
})

router.post("/:id/update-state", (req, res, next) => {
    const appointmentId = req.params.id
    const { status } = req.body
    const nodemailer = new NodemailerService()

    Appointment.findByIdAndUpdate(appointmentId, { status }, {
        useFindAndModify: false
    })
        .populate('patientId')
        .then(result => {
            nodemailer.sendEmail(result.patientId.email, status, result.date, result.reference)
            return res.json(result)
        })
        .catch(err => console.log(err))
})


module.exports = router;