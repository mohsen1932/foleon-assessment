import axios from "axios";
import qs from "qs";

import * as helpers from "../helpers";

const apiBaseUrl = "https://api.foleon.com";
const clientID = "avwi48Oz0X";
const clientSecret =
  "7b25d5872f7f5be38a765704dc875a83272aa69b3216054425aef4998e347f58";

export function getNewToken() {
  return new Promise((resolve, reject) => {
    axios
      .post(`${apiBaseUrl}/oauth`, {
        grant_type: "client_credentials",
        client_id: `${clientID}`,
        client_secret: `${clientSecret}`,
      })
      .then((response) => {
        helpers.saveToken(response.data.access_token, response.data.expires_in);
        resolve(response.data.access_token);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

axios.interceptors.response.use(
  (response) => {
    // Return a successful response back to the calling service
    return response;
  },
  (error) => {
    // Return any error which is not due to authentication back to the calling service
    if (error?.response?.status !== 401) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
    // Try request again with new token
    return getNewToken()
      .then((token) => {
        // New request with new token
        const config = error.config;
        config.headers["Authorization"] = `Bearer ${token}`;

        return new Promise((resolve, reject) => {
          axios
            .request(config)
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
              reject(error);
            });
        });
      })
      .catch((error) => {
        Promise.reject(error);
      });
  },
);

export const getAllPublications = async ({ page = 1, filter = "" }) => {
  const { access_token } = helpers.getToken();
  const params = { page, limit: 15 };
  if (filter) {
    params.filter = [
      {
        field: "category",
        type: "eq",
        value: `${filter}`,
      },
    ];
  }

  try {
    return axios.get(
      `${apiBaseUrl}/v2/magazine/edition?${qs.stringify({ ...params })}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
  } catch (error) {
    throw error;
  }
};
export const searchPublication = async ({ value }) => {
  const { access_token } = helpers.getToken();
  const params = {
    limit: 100,
    query: [
      {
        field: "name",
        type: "like",
        value: `%${value}%`,
      },
    ],
  };
  try {
    return axios.get(
      `${apiBaseUrl}/v2/magazine/edition?${qs.stringify({ ...params })}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
  } catch (error) {
    throw error;
  }
};
export const getAllCategories = async () => {
  const { access_token } = helpers.getToken();
  try {
    return axios.get(`${apiBaseUrl}/magazine/edition/category`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};
export const getOnePublication = async ({ id }) => {
  const { access_token } = helpers.getToken();
  try {
    return axios.get(`${apiBaseUrl}/v2/magazine/edition/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};
