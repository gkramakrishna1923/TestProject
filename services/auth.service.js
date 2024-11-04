import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const register = (username, email, password) => {
  return axios.post(API_URL, {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL ,{
      username,
      password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
