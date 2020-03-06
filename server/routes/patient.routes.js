const express = require('express');
const router = express.Router();

const Patient = require('../models/Patient.model')

/* GET patient */
router.get('/', (req, res, next) => {
    let options = {}

    Patient.find(options).then(results => {
        res.json(results)
    })
})

module.exports = router;