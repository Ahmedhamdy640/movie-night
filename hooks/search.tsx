import { searchApi } from "@/api/searchApi";
import { MovieDetailsProps, SearchedMoviesProps } from "@/types/type";
import { useQuery } from "@tanstack/react-query";

export const useSearch = (query: string) => {
  return useQuery({
    queryKey: ["searchMovies", query],
    queryFn: () => searchApi(query),
  });
};
