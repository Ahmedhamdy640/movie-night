import { topRatedApi } from "@/api/topRatedApi";
import { useQuery } from "@tanstack/react-query";

export const useTopRatedMovies = () => {
  return useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: topRatedApi,
  });
};
