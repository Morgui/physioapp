const express = require('express');
const router = express.Router();

const Patient = require('../models/Patient.model')
const Appointment = require('../models/Appointment.model')

// GET patient
router.get('/', (req, res, next) => {
    let options = {}

    Patient.find(options).then(results => {
        res.json(results)
    })
})

// GET patient by id
router.get('/:id', (req, res, next) => Patient.findOne({ _id: req.params.id })
    .then(patient => res.json(patient))
    .catch(err => console.log(err))
);

// PUT update patient by id
router.put('/:id', (req, res, next) => {
    const patientId = req.params.id
    const { name, surname, email, age, genre, antecedents } = req.body


    return Patient.findByIdAndUpdate(patientId, {
        age: age || 0,
        genre: genre || '',
        antecedents: antecedents || '',
        name,
        surname,
        email
    }, {
        useFindAndModify: false
    })
        .then(response => res.json(response))
        .catch(err => console.log(err))

})


module.exports = router;