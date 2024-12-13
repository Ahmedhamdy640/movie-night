import React, { useState, useEffect } from "react";
import { Image, Text, View, ScrollView, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetMovieDetails } from "@/hooks/movieDetails";
import * as SolidIcons from "react-native-heroicons/solid";
import * as OutlineIcons from "react-native-heroicons/outline";
import { useGetMovieCast } from "@/hooks/movieCast";
import Actors from "@/components/Actors";
import {
  addFavoriteMovie,
  getFavoriteMovies,
  removeFavoriteMovie,
} from "@/lib/favorite";
import useFavoriteStore from "@/store";

const MovieDetails = () => {
  const [documentId, setDocumentId] = useState<string | null>(null);

  const route = useRoute();
  const data = route.params as { id: number };

  const { data: movieDetails, isLoading: movieDetailsLoading } =
    useGetMovieDetails(data.id);
  const { data: castData, isLoading: castLoading } = useGetMovieCast(data.id);
  const cast = castData?.cast;

  const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore();
  const isMovieFavorite = isFavorite(movieDetails?.id || 0);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const movies = await getFavoriteMovies();

        // Find the document ID for the current movie
        const movieDoc = movies.find((movie) => movie.id === movieDetails?.id);
        if (movieDoc) {
          setDocumentId(movieDoc.$id); // Save the document ID
        }
      } catch (error) {
        console.error("Error fetching favorite movies:", error);
      }
    };

    fetchFavorites();
  }, [movieDetails?.id]);

  const handleFavoritePress = async () => {
    try {
      if (isMovieFavorite) {
        // Remove favorite movie
        if (documentId) {
          removeFavorite(movieDetails?.id || 0);
          await removeFavoriteMovie(documentId);
          setDocumentId(null);
        }
      } else if (movieDetails) {
        // Add favorite movie
        addFavorite({
          id: movieDetails.id,
          poster_path: movieDetails.poster_path || "",
          title: movieDetails.title || "",
        });
        const newDocumentId = await addFavoriteMovie(
          movieDetails.id,
          movieDetails.poster_path || "",
          movieDetails.title || ""
        );
        setDocumentId(newDocumentId.$id); // Update the document ID
      }
    } catch (error) {
      console.error("Error handling favorite action:", error);
    }
  };

  if (movieDetailsLoading || castLoading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-neutral-900">
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  if (!data) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <Text className="text-neutral-400 text-lg">
          There are no details for this movie
        </Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView className="bg-neutral-900 flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Movie details */}
        <View className="flex-row mx-5 mt-8 items-center">
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`,
            }}
            className="w-[170px] h-[260px] rounded-lg"
          />
          <View className="flex-1 ml-6">
            <Text className="text-white text-xl font-bold mb-2">
              {movieDetails?.title}
            </Text>
            <Text className="text-neutral-400 text-sm">
              {movieDetails?.release_date}
            </Text>
            <View className="mt-6 flex-row items-center mb-7">
              <Text className="text-white text-lg mr-2 font-semibold">
                {movieDetails?.vote_average.toFixed(1)}
              </Text>
              <SolidIcons.StarIcon size={20} color={"orange"} />
            </View>
            <View>
              {isMovieFavorite ? (
                <SolidIcons.HeartIcon
                  size={30}
                  color={"red"}
                  onPress={handleFavoritePress}
                />
              ) : (
                <OutlineIcons.HeartIcon
                  size={30}
                  color={"white"}
                  onPress={handleFavoritePress}
                />
              )}
            </View>
          </View>
        </View>

        {/* Overview */}
        <View className="mx-5 mt-5">
          <Text className="text-white text-lg font-bold mb-2">Overview</Text>
          <Text className="text-neutral-400 text-base leading-6">
            {movieDetails?.overview || "No overview available."}
          </Text>
        </View>

        {/* Genres */}
        <View className="mx-5 mt-5">
          <Text className="text-white text-lg font-bold mb-2">Genres</Text>
          <Text className="text-neutral-400 text-base leading-6">
            {movieDetails?.genres?.map((genre) => genre.name).join(", ") ||
              "N/A"}
          </Text>
        </View>

        {/* Cast Section */}
        <View className="mx-5 mt-5">
          <Text className="text-white text-lg font-bold mb-2">Cast</Text>
          {cast && cast.length > 0 ? (
            cast.map((actor, index) => (
              <Actors actor={actor} index={index} key={actor.id} />
            ))
          ) : (
            <Text className="text-neutral-400 text-base leading-6">
              no cast
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetails;
