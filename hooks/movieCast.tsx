import { useQuery } from "@tanstack/react-query";
import { CastMember, CastProps } from "@/types/type"; // Adjust the path and name of your CastMember type
import { movieCastApi } from "@/api/movieCastApi";

export const useGetMovieCast = (id: number) => {
  return useQuery<CastProps>({
    queryKey: ["movieCast", id],
    queryFn: () => movieCastApi(id),
  });
};
