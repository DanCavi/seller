import axios from 'axios';
import url from 'baseUrl';

const urlModulo = '/ejecutivos';
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

export const getEjecutivo = async(endpoint) => {
  try {
    const response = await instance.get(endpoint);
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}