import axios from 'axios';

class Service {
  service: any;
  constructor() {
    let service = axios.create();
    service.interceptors.response.use(this.handleSuccess);
    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }
}

export default new Service();
