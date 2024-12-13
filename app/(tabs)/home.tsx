import { ScrollView, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTrendingMovies } from "@/hooks/trending";
import TrendingMovies from "@/components/TrendingMovies";
import { useTopRatedMovies } from "@/hooks/topRated";
import MovieCardSkeleton from "@/components/MovieCardSkeleton";
import { useUpcommingMovies } from "@/hooks/upcomming";
import Movies from "@/components/Movies";
import { getFavoriteMovies } from "@/lib/favorite";
import useFavoriteStore from "@/store";

const Home = () => {
  const {
    data: trendingMovies,
    error,
    isLoading: trendingMoviesLoading,
  } = useTrendingMovies();
  const { data: topRatedMovies, isLoading: topRatedMoviesLoading } =
    useTopRatedMovies();
  const { data: upcommingMovies, isLoading: upcommingMoviesLoading } =
    useUpcommingMovies();
  const { favoriteMovies, addFavorite } = useFavoriteStore();

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      const favMovies = await getFavoriteMovies();
      for (let i = 0; i < favMovies.length; i++) {
        addFavorite({
          id: favMovies[i].id,
          poster_path: favMovies[i].poster_url,
          title: favMovies[i].title,
        });
      }
    };
    fetchFavoriteMovies();
  }, [favoriteMovies]);

  if (
    trendingMoviesLoading ||
    topRatedMoviesLoading ||
    upcommingMoviesLoading
  ) {
    return <MovieCardSkeleton />;
  }

  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View>
          <TrendingMovies data={trendingMovies?.results} />
        </View>
        <View>
          <Movies data={topRatedMovies?.results} title="Top Rated" />
        </View>
        <View>
          <Movies
            data={upcommingMovies?.results}
            title="Upcomming"
            containerStyle={{ marginTop: 40 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
