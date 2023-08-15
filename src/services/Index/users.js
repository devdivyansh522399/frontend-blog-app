import axios from "axios";
import { setToken } from "../token";
import { API_URL } from "../../utils/ApiUtil";

export const signup = async ({ name, email, password }) => {
  try {
    const { data } = await axios.post(`${API_URL}/api/user/register`, {
      name,
      email,
      password,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const login = async ({ email, password }) => {
  try {
    console.log(API_URL);
    const { data } = await axios.post(`${API_URL}/api/user/login`, {
      email,
      password,
    });
    setToken(data.token);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const getUserProfile = async ({ token, _id }) => {
  try {
    const config = {
      headers: {
        Authorization: token,
      },
    };

    const { data } = await axios.get(`${API_URL}/api/user/profile/${_id}`, config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const updateProfile = async ({ token, _id, userData }) => {
  try {
    const config = {
      headers: {
        Authorization: token,
      },
    };

    const { data } = await axios.put(
      `${API_URL}/api/user/profile/${_id}`,
      userData,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const updateProfilePicture = async ({ token, _id, formData }) => {
  try {
    console.log(formData);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      },
    };

    const { data } = await axios.put(
       `${API_URL}/api/user/profilepicture/${_id}`,
      formData,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
