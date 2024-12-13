import { trendingApi } from "@/api/trendingApi";
import { useQuery } from "@tanstack/react-query";

// Custom hook to fetch trending movies
export const useTrendingMovies = () => {
  return useQuery({
    queryKey: ["trendingMovies"],
    queryFn: trendingApi,
  });
};
