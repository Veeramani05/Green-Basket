import http from './httpService';
import { apiUrl } from "../config.json";

export const getContactList = () => {
  const apiEndPoint = `${apiUrl}/contactDetails`;
  return http.get(apiEndPoint)
}