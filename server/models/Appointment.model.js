const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const appointmentSchema = new Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    date: Date,
    motive: String,
    reference: String
}, {
    timestamps: true
});

appointmentSchema.statics.generateReference = function (numChart) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < numChart; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment