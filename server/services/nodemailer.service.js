const nodemailer = require("nodemailer");

const moment = require('moment')
const momentLocale = require('../configs/moment.locale.config')


moment.locale('es', momentLocale);

class NodemailerService {

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

    templatePending = (date, reference) => {
        return {
            subject: `Cita creada, nº Ref. ${reference} - Pendiente de confirmación`,
            body: `Su cita ha sido creada para el día ${moment(date).format("LL")} a las ${moment(date).format("LT")} y se encuentra pendiente de confirmación. Gracias para confiar en nuestros servicios`
        }
    }

    templateAccepted = (date, reference) => {
        return {
            subject: `Cita confirmada, nº Ref. ${reference}`,
            body: 'Su cita ha sido confirmada, acuda a nuestra clínica en la fecha y hora acordada. ¡Te esperamos!'
        }
    }

    templateCancelled = (date, reference) => {
        return {
            subject: `Cita cancelada, nº Ref. ${reference}`,
            body: `Lamentamos informarle que su cita para el día ${moment(date).format("LL")} a las ${moment(date).format("LT")} ha sido cancelada, por favor solicite otra nuevamente. Perdone las molestias`
        }
    }

    sendEmail = (email, template, date, reference) => {
        let usedTemplate = null;
        switch (template) {
            case 'pending':
                usedTemplate = this.templatePending(date, reference);
                break;
            case 'accepted':
                usedTemplate = this.templateAccepted(date, reference)
                break;
            case 'cancelled':
                usedTemplate = this.templateCancelled(date, reference)
                break;
            default:
                console.log('template undefined');
                return
        }

        this.transporter.sendMail({
            from: 'Physio App <physio.app.project3@gmail.com>',
            to: email,
            subject: usedTemplate.subject,
            text: usedTemplate.body,
            html: usedTemplate.body
        })
    }
}

module.exports = NodemailerService