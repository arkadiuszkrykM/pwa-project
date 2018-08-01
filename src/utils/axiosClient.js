import axios from 'axios';


export default class AxiosClient {
    constructor() {
        this.insance = axios.create({
            baseURL: ''
        });
    }
}
