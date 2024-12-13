import axios from "axios";

const API_KEY = process.env.API_KEY;
export const movieDetailsApi = async (id: number) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      {
        // method: "GET",
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
