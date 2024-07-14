import axios from "axios";
import { API_URL } from "../../utils/ApiUtil";

export const getAllPosts = async () => {
  try {
    const { data, headers } = await axios.get(
      `${API_URL}/api/posts/`
    );
    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const getSinglePost = async ({ slug }) => {
  try {
    const { data } = await axios.get(`${API_URL}/api/posts/${slug}`);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const deletePost = async ({ slug, token }) => {
  try {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };
    
    const { data } = await axios.delete(`${API_URL}/api/posts/${slug}`, config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const updatePost = async ({ formData, slug, token }) => {
  try {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const { data } = await axios.put(`${API_URL}/api/posts/${slug}`, formData, config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const createPost = async ({ token, formData }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `${token}`,
      },
    };
    const { data } = await axios.post(`${API_URL}/api/posts/`, formData, config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};