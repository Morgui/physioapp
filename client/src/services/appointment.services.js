import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    getAllAppointments = () => this.service.get('/appointment').then(response => response.data)
    getAppointmentDetails = id => this.service.get(`/appointment/${id}`).then(response => response.data)
    createAppointment = appointment => this.service.post(`/appointment`, appointment).then(response => response.data)
}