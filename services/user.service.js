import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const getPublicContent = () => {
  return axios.get(API_URL );
};

const getUserBoard = () => {
  return axios.get(API_URL )
};

const getModeratorBoard = () => {
  return axios.get(API_URL )
};

const getAdminBoard = () => {
  return axios.get(API_URL)
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};