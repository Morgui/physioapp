const express = require('express');
const router = express.Router();

const Appointment = require('../models/Appointment.model')
const Patient = require('../models/Patient.model')

/* GET appointment */
router.get('/', (req, res, next) => {
    let options = {}
    let query = req.query;

    if (query.reference) {
        options['reference'] = query.reference
    }

    // if (query.old){
    //     options['old'] 
    // }

    Appointment.find(options).populate('patientId').sort({ date: 'asc' }).then(results => res.json(results))
});


/* POST appointment */
router.post('/', (req, res, next) => {

    const { email, name, surname, date, time, motive } = req.body

    //Unir fecha y hora en la variable date para el modelo appointment
    let stringDate = new Date(Date.parse(`${date}T${time}`))

    // Crear un patient con los datos, si no existiera. En cualquier caso se obtiene el paciente en una variable para uso posterior
    Patient.findOne({ email })
        .then(patient => {

            if (patient) {
                console.log("Existe patient", patient)
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
            //Se crea la cita con el modelo Appointment, usando el id del paciente como referencia en esta
            return Appointment.create({
                patientId: patient.id,
                date: stringDate,
                motive,
                reference: Appointment.generateReference(8)
            })
        })
        .then(newAppointment => {
            res.json({
                message: "Creada la cita satisfactoriamente",
                data: newAppointment
            });
        })
        .catch(err => console.log(err))
})

module.exports = router;