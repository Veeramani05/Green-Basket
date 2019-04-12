import http from './httpService';
import { apiUrl } from "../config.json";

export const getFeedbacks = () => {
  const apiEndPoint = `${apiUrl}/feedback`;
  return http.get(apiEndPoint)
}


export const getUserDetails = () =>{
  const apiEndPoint = `${apiUrl}/userDetails`;
  return http.get(apiEndPoint)
}