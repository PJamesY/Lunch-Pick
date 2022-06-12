import axios, { AxiosResponse } from 'axios';

class AXIOS {
  service: any;
  constructor() {
    let service = axios.create();
    service.interceptors.response.use(this.handleSuccess);
    service.defaults.baseURL = process.env.API_BACKEND;
    this.service = service;
  }

  handleSuccess(response: AxiosResponse) {
    return response;
  }

  get(path: string, params?: any) {
    return this.service.get(path, { params });
  }
}

export default new AXIOS();
