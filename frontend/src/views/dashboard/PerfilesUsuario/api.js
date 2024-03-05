import axios from 'axios';
import url from 'baseUrl';

const urlModulo = '/perfiles-usuario';
const baseURL = `${url.BASE_URL}${urlModulo}`;

const instance = axios.create({
  baseURL,
});

export const getData = async (endpoint) => {
  try {
    const response = await instance.get(endpoint);
    return response.data
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await instance.post(endpoint, data);
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}