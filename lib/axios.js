import axios from "axios";

const instance = axios.create({
  baseURL: "https://linkbrary-api.vercel.app/docs/19-권민수/",
});

export default instance;
