import axios from 'axios';

const URL = 'http://localhost:5000';

export const addUser = (data) => {
  return axios.post(`${URL}/adduser`, data);
};

export const getUsers = () => {
  return axios.get(`${URL}/alluser`);
};

export const getUser = (id) => {
  return axios.get(`${URL}/edituser/${id}`);
};

export const editUser = (data, id) => {
  return axios.put(`${URL}/edituser/${id}`, data);
};

export const deleteUser = (id) => {
  return axios.delete(`${URL}/alluser/${id}`);
};
