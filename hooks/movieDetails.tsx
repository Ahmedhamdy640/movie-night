import { movieDetailsApi } from "@/api/movieDetailsApi";
import { MovieDetailsProps } from "@/types/type";
import { useQuery } from "@tanstack/react-query";

export const useGetMovieDetails = (id: number) => {
  return useQuery<MovieDetailsProps>({
    queryKey: ["movieDetails", id],
    queryFn: () => movieDetailsApi(id),
  });
};
