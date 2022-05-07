import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjA4YjU4Y2JhNDQyM2M5NmI1NmE2MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODM4MzM3NiwiZXhwIjoxNjU3MDIzMzc2fQ.GDztcJOCKAkpKcqAEDGxv7w4Ahh-lCcIFu2auANaMTY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
