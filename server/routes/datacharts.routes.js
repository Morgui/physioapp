const express = require('express');
const router = express.Router();

const Appointment = require('../models/Appointment.model')

const moment = require('moment')


const reorderData = (appointments, labels) => {

    let orderedData = {
        confirmed: {},
        cancelled: {}
    }
    console.log(appointments)
    for (appointment of appointments) {
        const checkDate = appointment.date.toISOString().split("T")[0]
        if (appointment.status === 'accepted') {
            orderedData.confirmed[checkDate] === undefined ? orderedData.confirmed[checkDate] = { date: appointment.date, appointments: 1 } : orderedData.confirmed[checkDate].appointments += 1
        } else if (appointment.status === 'cancelled') {
            orderedData.cancelled[checkDate] === undefined ? orderedData.cancelled[checkDate] = { date: appointment.date, appointments: 1 } : orderedData.cancelled[checkDate].appointments += 1
        }
    }


    let finalData = {
        confirmed: [],
        cancelled: []
    }

    for (let label of labels) {
        orderedData.confirmed[label] !== undefined ? finalData.confirmed.push(orderedData.confirmed[label]) : finalData.confirmed.push({ date: new Date(label), appointments: 0 })
        orderedData.cancelled[label] !== undefined ? finalData.cancelled.push(orderedData.cancelled[label]) : finalData.cancelled.push({ date: new Date(label), appointments: 0 })
    }
    return finalData
}

// GET datacharts
router.get('/', (req, res, next) => {

    let today = moment()
    let initialDay = moment().subtract(30, 'days')

    let currentDay = new Date(initialDay.valueOf()).toISOString().split('T')[0]

    let labels = []
    let count = 0
    while (count < 30) {
        initialDay.add(1, 'days')
        currentDay = new Date(initialDay.valueOf()).toISOString().split('T')[0]
        labels.push(currentDay)
        count += 1
    }

    today = moment()
    initialDay = moment().subtract(30, 'days')
    const options = { date: { $gte: new Date(initialDay.valueOf()), $lte: new Date(today.valueOf()) } }

    Appointment.find(options)
        .then(results => {
            const reorderedData = reorderData(results, labels)
            res.json({
                labels,
                confirmedAppointments: reorderedData.confirmed,
                cancelledAppointments: reorderedData.cancelled,
            })
        })
        .catch(err => console.log(err))
});

module.exports = router;