import http from './httpService';
import { apiUrl } from "../config.json";

export const getAllOrders = () => {
  const apiEndPoint = `${apiUrl}/orders`;
  return http.get(apiEndPoint)
}