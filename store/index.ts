import { create } from "zustand";
import { FavoriteMoviesProps } from "@/types/type";

interface FavoriteStore {
  favoriteMovies: FavoriteMoviesProps[]; // Array of movie objects
  addFavorite: (movie: FavoriteMoviesProps) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const useFavoriteStore = create<FavoriteStore>((set: any, get: any) => ({
  favoriteMovies: [],
  addFavorite: (movie: FavoriteMoviesProps) => {
    set((state: { favoriteMovies: FavoriteMoviesProps[] }) => {
      // Avoid duplicates by checking if the movie already exists
      const exists = state.favoriteMovies.some(
        (favMovie: FavoriteMoviesProps) => favMovie.id === movie.id
      );

      return exists
        ? state // Do nothing if it already exists
        : { favoriteMovies: [...state.favoriteMovies, movie] };
    });
  },
  removeFavorite: (id: number) => {
    set((state: { favoriteMovies: FavoriteMoviesProps[] }) => ({
      favoriteMovies: state.favoriteMovies.filter(
        (movie: FavoriteMoviesProps) => movie.id !== id
      ),
    }));
  },
  isFavorite: (id: number) => {
    return get().favoriteMovies.some(
      (movie: FavoriteMoviesProps) => movie.id === id
    );
  },
}));

export default useFavoriteStore;
