import { upcommingApi } from "@/api/upcommingApi";
import { useQuery } from "@tanstack/react-query";

export const useUpcommingMovies = () => {
  return useQuery({
    queryKey: ["upcommingMovies"],
    queryFn: upcommingApi,
  });
};
