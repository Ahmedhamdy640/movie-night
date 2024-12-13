import axios from "axios";
import { API_KEY } from "../constants";
export const upcommingApi = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log("Error", err);
  }
};
