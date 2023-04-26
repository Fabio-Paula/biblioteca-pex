import { IFormInput } from "@/pages/signUp";
import { api } from "./infra/HttpClient";
import { URL_POST } from "../constants/service";

export const authService = {
  async login(data: IFormInput) {
    return api
      .post(`${URL_POST.auth}`, data)
      .then((res: any) => {})
      .catch((e: any) => {});
  },
};
