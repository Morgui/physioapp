const express = require('express');
const router = express.Router();

const Appointment = require('../models/Appointment.model')
const Patient = require('../models/Patient.model')

/* GET appointment */
router.get('/', (req, res, next) => {
    res.json({ "listado": "de citas" });
});

router.post('/', (req, res, next) => {
    const newPatientData = req.body

    //tirar del email para saber si el paciente existe
    const email = newPatientData.email;
    //Unir fecha y hora en la variable date para el modelo appointment
    let date = new Date(Date.parse(`${newPatientData.date}T${newPatientData.time}`))

    // Crear un patient con los datos, si no existiera. En cualquier caso se obtiene el paciente en una variable para uso posterior
    Patient.findOne({ email }).then(patient => {
        console.log(newPatientData)

        if (patient) {
            console.log("Existe patient", patient)
            return patient;
        } else {
            return Patient.create({
                name: newPatientData.name,
                surname: newPatientData.surname,
                email: newPatientData.email
            }).then(patient => {
                console.log("No existe pero se ha creado", patient)
                return patient
            })
        }
    })
        .then(patient => {
            // Se crea la cita con el modelo Appointment, usando el id del paciente como referencia en esta
            return Appointment.create({
                patientId: patient.id,
                date,
                motive: newPatientData.motive,
                reference: Appointment.generateReference(6)
            })
        })
        .then(result => {
            res.json({
                message: "Creada la cita satisfactoriamente",
                data: result
            });
        })
        .catch(err => console.log(err))
})

module.exports = router;