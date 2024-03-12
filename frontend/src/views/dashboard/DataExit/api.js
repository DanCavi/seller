import axios from 'axios';
import url from 'baseUrl';

const urlModulo = '/data-exit';
const baseURL = `${url.BASE_URL}${urlModulo}`;

const instance = axios.create({
  baseURL,
});


export const getData = async () => {
  try {
    const response = await instance.get();
    return response.data
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postData = async (data) => {
  try {
    const response = await instance.post('', data);
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const patchData = async (endpoint, data) => {
  try {
    const response = await instance.patch(endpoint, data);
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const deleteData = async (endpoint) => {
  try {
    const response = await instance.delete(endpoint);
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getPerfiles = async () => {
  try {
    const response = await instance.get('/perfiles');
    return response.data
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const getTablas = async () => {
  try {
    const response = await instance.get('/tablas');
    return response.data
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export const getColumns = async (tabla) => {
  try {
    const response = await instance.get(`/columns?tbl=${tabla}`);
    return response.data
  } catch (error) {
    console.log(error);
  }
}