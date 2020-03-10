import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}`,
            withCredentials: true
        })
    }

    getAllPatients = () => this.service.get('/patients').then(response => response.data)
    getPatientDetails = id => this.service.get(`/patients/${id}`).then(response => response.data)
    updatePatient = (id, patient) => this.service.put(`/patients/${id}`, patient).then(response => response.data)
}