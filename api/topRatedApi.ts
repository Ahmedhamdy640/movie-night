import axios from "axios";

const API_KEY = process.env.API_KEY;
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