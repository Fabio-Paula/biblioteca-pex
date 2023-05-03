import { IFormInput } from "@/pages/signUp";
import { api } from "./infra/HttpClient";
import { URL_POST } from "../constants/service";
import { tokenService } from "./tokenService";

export const authService = {
  async login(data: IFormInput) {
    return api
      .post(`${URL_POST.auth}`, data)
      .then((res: any) => {
        // tokenService.save(res.data.access_token)
        console.log('hi')
      })
      .catch((e: any) => {
        console.log('nop')
      });
  },
};
