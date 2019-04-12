import http from './httpService';
import { apiUrl } from "../config.json";

export const getBanners = () => {
  const apiEndPoint = `${apiUrl}/banners`;
  return http.get(apiEndPoint)
}