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

    Appointment.find(options).populate('patientId').sort({ date: 'asc' }).then(results => res.json(results))
});


/* POST appointment */
router.post('/', (req, res, next) => {


    const appointmentData = req.body
    //Deconstructing (const{ email, name, surname, } = req.body)

    //tirar del email para saber si el paciente existe
    const email = appointmentData.email;
    //Unir fecha y hora en la variable date para el modelo appointment
    let date = new Date(Date.parse(`${appointmentData.date}T${appointmentData.time}`))

    // Crear un patient con los datos, si no existiera. En cualquier caso se obtiene el paciente en una variable para uso posterior
    Patient.findOne({ email })
        .then(patient => {
            console.log(appointmentData)

            if (patient) {
                console.log("Existe patient", patient)
                return patient;
            } else {
                return Patient.create({
                    name: appointmentData.name, //Al hacer el deconstructing el appointmentData iría fuera
                    surname: appointmentData.surname,
                    email: appointmentData.email
                })
                .then(patient => patient
)
            }
        })
        .then(patient => {
            //Se crea la cita con el modelo Appointment, usando el id del paciente como referencia en esta
            return Appointment.create({
                patientId: patient.id,
                date,
                motive: appointmentData.motive,
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