import axios from "axios";

const baseURL = '192.168.127'

export const api = axios.create({
  baseURL
})