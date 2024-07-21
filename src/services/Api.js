import axios from "axios";

const instance = axios.create({
  baseURL: "https://669b8060276e45187d35aac9.mockapi.io",
});

export const requestCampers = async () => {
  const { data } = await instance.get("/adverts");
  return data;
};


