const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: String,
    surname: String,
    email: {
        type: 'String',
        unique: true
    },
    age: Number,
    genre: String,
    antecedents: String
}, {
    timestamps: true
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient