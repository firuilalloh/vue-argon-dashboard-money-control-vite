import axios from "axios";
import { getCk, delCk } from "../utils/cookies";

const baseURL = `${import.meta.env.VITE_APP_BASE_URL}`;

const baseApi = axios.create({
  baseURL,
});

baseApi.interceptors.request.use(
  (config) => {
    const configs = config;
    const CERT = getCk("CERT");
    if (CERT) {
      configs.headers.Authorization = `Bearer ${CERT}`;
    } else {
      delCk("CERT");
      delete configs.headers.Authorization;
    }
    return configs;
  },
  (error) => {
    throw error;
  }
);

baseApi.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    let err;
    if (error.response?.data instanceof Blob) {
      err = JSON.parse(await error.response.data.text());
    }
    switch (error.response?.status) {
      case 401:
        delCk("CERT");
        break;
      default:
        break;
    }
    throw err ?? error?.response?.data ?? error;
  }
);

export default {
  install: (app) => {
    const ctx = app;
    ctx.config.globalProperties.$api = baseApi;
    ctx.$api = baseApi;
  },
};

export { baseApi };
