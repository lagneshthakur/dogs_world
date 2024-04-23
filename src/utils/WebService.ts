import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from './Apis';

axios.defaults.baseURL = BASE_URL;

const createHeader = (_URL: string, options = {}) => {
  let header = {
    'Content-Type': 'application/json',
    'x-api-key': 'live_A3apc3XbPrY1Nn37MoSyuHwpm7mpkW9EpRAq4J13bQIER6jwcFA3Vc2rqAMKIOpj',
  };
  options = { ...options, headers: header };
  return { URL: _URL, options: options };
};

const POST = <T, R>(_URL: string, data: T, _options?: any): Promise<AxiosResponse<R, any>> => {
  let { URL, options } = createHeader(_URL, _options)
  return axios.post(URL, data, options)
}

const GET = <R>(_URL: string, _options?: RequestInit): Promise<AxiosResponse<R>> => {
  let { URL, options } = createHeader(_URL, _options)
  return axios.get(URL, options)
}

const PATCH = <T, R>(_URL: string, data: T, _options?: any): Promise<AxiosResponse<R | any, any>> => {
  let { URL, options } = createHeader(_URL, _options)
  return axios.patch(URL, data, options)
}

const PUT = <T, R>(_URL: string, data: T, _options?: any): Promise<AxiosResponse<R | any, any>> => {
  let { URL, options } = createHeader(_URL, _options)
  return axios.put(URL, data, options)
}
const DELETE = <R>(_URL: string, _options?: any): Promise<AxiosResponse<R>> => {
  let { URL, options } = createHeader(_URL, _options)
  return axios.delete(URL, options)
}

export { POST, GET, PUT, PATCH, DELETE };