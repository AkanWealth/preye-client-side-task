import Cookies from 'js-cookie';
import axios from "axios";
import { toast } from 'react-toastify';

const BACKEND_URL  = 'http://localhost:5000/v1/'
// const BACKEND_URL  = 'https://kiara-ugwu.onrender.com/'
interface Iinstance {
  file: boolean;
}
export const instance = (token = true) => {
  const instanceHttp = axios.create({
    baseURL: BACKEND_URL,
    timeout: 50000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instanceHttp.interceptors.request.use((config) => {
    config.headers = config.headers ?? {};

    if (token) {
      config.headers.Authorization = `Bearer ${Cookies.get("Authenticated")}`
    }
    return config;
  });

  return instanceHttp
}

export const fileInstance = ({ file }: Iinstance, token = true ) => {
  const instanceHttp = axios.create({
    baseURL: BACKEND_URL,
    timeout: 50000,
    headers: {
      "Content-Type": file ? "multipart/form-data" : "application/json",
    },
  });

  instanceHttp.interceptors.request.use((config) => {
    config.headers = config.headers ?? {};

    if (token) {
      config.headers.Authorization = `Bearer ${Cookies.get("Authenticated")}`
    }
    return config;
  });

  return instanceHttp
}

export const next = () => {
  // throw new Error(
  //   e.response ?
  //     (e.response.data.message || e?.message)
  //     :
  //     toast.error("Something Went Wrong!")
  // );
  throw new Error(`${toast.error("Something Went Wrong!")}`)
};
