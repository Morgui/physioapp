import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}`,
            withCredentials: true
        })
    }

    getAllPatients = () => this.service.get('/admin/patients').then(response => response.data)
    getPatientDetails = id => this.service.get(`/admin/patients/${id}`).then(response => response.data)
}