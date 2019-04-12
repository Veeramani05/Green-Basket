import http from './httpService';
import { apiUrl } from "../config.json";

export const getAllProducts = () => {
  const apiEndPoint = `${apiUrl}/products`;
  return http.get(apiEndPoint);
}

export const getUoM = () => {
  const apiEndPoint = `${apiUrl}/configuration?configName=uom`;
  return http.get(apiEndPoint);
}

export const getCategories = () => {
  const apiEndPoint = `${apiUrl}/categories`;
  return http.get(apiEndPoint);
}

export const getOfferList = () => {
  const apiEndPoint = `${apiUrl}/getAllOffers`;
  return http.get(apiEndPoint);
}