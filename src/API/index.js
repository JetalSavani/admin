import { ApiRoutes } from "../Constants";

export const ApiHelperGet = (url) => {
  console.log(ApiRoutes.API_HOSTNAME + url);
  return fetch(ApiRoutes.API_HOSTNAME + url, {
    method: "GET",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(
      (result) => {
        console.log(result);
        return result;
      },
      (error) => {
        error = error;
      }
    );
};

export const ApiHelperPost = (url, data = {}) => {
  console.log(ApiRoutes.API_HOSTNAME + url);
  return fetch(ApiRoutes.API_HOSTNAME + url, {
    method: "POST",
    body: JSON.stringify(data),
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(
      (result) => {
        console.log(result);
        return result;
      },
      (error) => {
        error = error;
      }
    );
};
export const ApiHelperPostWithoutHeader = (url, data = {}) => {
  console.log(ApiRoutes.API_HOSTNAME + url);
  return fetch(ApiRoutes.API_HOSTNAME + url, {
    method: "POST",
    body: data,
    withCredentials: true,
  })
    .then((res) => res.json())
    .then(
      (result) => {
        console.log(result);
        return result;
      },
      (error) => {
        error = error;
      }
    );
};
