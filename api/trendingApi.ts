import axios from "axios";

const API_KEY = process.env.API_KEY;

export const trendingApi = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
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
    console.error("Error", err);
    return null;
  }
};
