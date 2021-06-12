import axios from "axios"

export default class JobAdvertisementService{
    getJobAdvertisement() {
        return axios.get("http://localhost:8080/api/jobadvertisements/getallbyactive")
    }

    getJobAdvertisementId(id) {
        return axios.get("http://localhost:8080/api/jobadvertisements/getbyid?id=" + id)
    }
}