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


// es la información y expediente del Paciente - no se loguea ni hace nada, es para que al profesional se le muestren estos datos