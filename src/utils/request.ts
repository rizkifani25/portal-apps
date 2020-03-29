import axios from "axios";
import { async } from "@angular/core/testing";

export const fetch = async (url, options) => {
  let headers = options ? options.headers : null;

  if (options && headers) {
    options.headers = {
      ...headers
    };
  } else {
    options = options ? options : {};
    options = {
      ...options
    };
  }

  let header = {
    ...options,
    url: url
  };

  try {
    let response = await axios.request(header);
    let data = {};
    if (response.data) data = response.data;
    return data;
  } catch (err) {
    let error = {};
    if (err && err.response) {
      if (err.response.data.message) {
        error = err.response.data.message;
      } else {
        error = "Terjadi Kesalahan";
      }
    } else {
      error = "Terjadi Kesalahan";
    }
    throw error;
  }
};
