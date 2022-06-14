import axios, { AxiosResponse } from 'axios';

export class Axios {
  service: any;
  constructor() {
    let service = axios.create();
    service.interceptors.response.use(this.handleSuccess);
    service.defaults.baseURL = process.env.API_BACKEND;
    this.service = service;
  }

  handleSuccess(response: AxiosResponse) {
    return response.data;
  }

  get(path: string, params?: any) {
    return this.service.get(path, { params });
  }
}

export default new Axios();
