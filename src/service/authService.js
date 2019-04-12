import jwtDecode from "jwt-decode";
import http from "./httpService";
 
const tokenKey = "token";

http.setJwt(getJwt());


export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    console.log(jwtDecode(jwt)) 
    return;
  } catch (ex) {
    return null;
  }
}


export function getJwt() {
  return localStorage.getItem(tokenKey);
}



export default {
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
};
