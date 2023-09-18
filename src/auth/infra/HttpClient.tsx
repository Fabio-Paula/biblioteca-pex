import axios from "axios";
import jwt from "jwt-decode";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

const baseURL = 'http://localhost:8080'

const ApiClient = (ctx?: GetServerSidePropsContext) => {
  const defaultOptions = {
    baseURL,
  };
  const instance = axios.create(defaultOptions);
  instance.interceptors.request.use(async (config) => {
    const session = await getSession(ctx);
    if (session) {
      let decoded = await jwt(String(session.user.access_token))
      if(((decoded as any).exp * 1000) > Date.now()){
        config.headers.Authorization = `Bearer ${session.user.access_token}`;
      }
    }
    return config;
  });
  return instance;
};
export default ApiClient;
