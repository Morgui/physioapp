import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}`,
            withCredentials: true
        })
    }

    getAllAppointments = () => this.service.get('/appointment').then(response => response.data)
    getAppointmentDetails = id => this.service.get(`/appointment/${id}`).then(response => response.data)
    createAppointment = appointment => this.service.post('/appointment', appointment).then(response => response.data)
    getAppointmentByReference = reference => this.service.get(`/appointment/${reference}`).then(response => response.data)
    getFreeHoursByDate = (date) => this.service.post('/appointment/available-hours', { date }).then(response => response.data)
    updateAppointmentStatus = (id, status) => this.service.post(`/appointment/${id}/update-state`, { status }).then(response => response.data)
    getOlderAppointments = (id) => this.service.get(`/appointment/?patientId=${id}`).then(response => response.data)
}