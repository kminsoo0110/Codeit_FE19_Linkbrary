import axios from "axios";

const instance = axios.create({
  baseURL: "https://linkbrary-api.vercel.app/19-권민수/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
