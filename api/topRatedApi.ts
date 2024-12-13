import axios from "axios";

import { API_KEY } from "../constants";
export const topRatedApi = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      {
        method: "GET",
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
