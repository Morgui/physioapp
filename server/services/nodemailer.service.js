const nodemailer = require("nodemailer");

class NodemailerService {

    templates = {
        pending: {
            subject: 'Cita creada - Pendiente de confirmación',
            body: 'Su cita ha sido creada y se encuentra pendiente de confirmación. Gracias para confiar en nuestros servicios'
        },
        accepted: {
            subject: 'Cita confirmada',
            body: 'Su cita ha sido confirmada, acuda a nuestra clínica en la fecha y hora acordada. !Te esperamos¡'
        },
        cancelled: {
            subject: 'Cita cancelada',
            body: 'Lamentamos informarle que su cita ha sido cancelada, por favor solicite otra nuevamente. Perdone las molestias'
        }
    }

    constructor() {
        this.credentials = {
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        }
        this.transporter = nodemailer.createTransport(this.credentials)
    }
    sendEmail = (email, template) => this.transporter.sendMail({
        from: 'Physio App',
        to: `${email}`,
        subject: `${this.templates.subjetc}`,
        text: `${this.templates.body}`,
        html: `${this.templates.body}`
    })
}

module.exports = NodemailerService