import axios from "axios";

export default axios.create({
  baseURL: "https://bloggy-api.herokuapp.com",
});
