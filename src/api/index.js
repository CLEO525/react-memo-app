import axios from "axios";

const BASE_URL = "http://localhost:4000";

const request = (method, url, data) => {
  return axios({
    method,
    url: BASE_URL + url,
    data,
  }).then((result) => result.data);
};

export const memoApi = {
  fetch() {
    return request("get", "/memo");
  },
  create({ memo }) {
    return request("post", "/memo", { memo });
  },
  destroy(id) {
    return request("delete", `/memo/${id}`);
  },
  update(id, payload) {
    return request("put", `/memo/${id}`, payload);
  },
};

export const todoApi = {
  fetch() {
    return request("get", "/todo");
  },
  create({ todo }) {
    return request("post", "/todo", { todo, checked: false });
  },
  destroy(id) {
    return request("delete", `/todo/${id}`);
  },
  // update(id, payload) {
  //   return request("put", `/todo/${id}`, {
  //     todo: payload.todo,
  //     checked: payload.checked,
  //   });
  // },
  // update(id, payload) {
  //   const { todo, checked } = payload;

  //   return request("put", `/todo/${id}`, {
  //     todo,
  //     checked,
  //   });
  // },
  update(id, { todo, checked }) {
    return request("put", `/todo/${id}`, { todo, checked });
  },
};

// req = {
//        body: {
//                todo: "tests",
//                checked: false
//              }
//      }

// export const getMemos = async () => {
//   const respons = await axios.get(`${BASE_URL}/memo`);
//   return respons.data;
// };

// export const getTodos = async () => {
//   const respons = await axios.get(`${BASE_URL}/todo`);
//   return respons.data;
// };
// export const getMemoById = async (id) => {
//   const response = await axios.get(`${BASE_URL}/memo/${id}`);
//   return response.data;
// };
// export const getTodoById = async (id) => {
//   const response = await axios.get(`${BASE_URL}/todo/${id}`);
//   return response.data;
// };
