import {
  Text,
  TouchableOpacity,
  Image,
  StyleProp,
  ImageStyle,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { FavoriteMoviesProps, Movie } from "@/types/type";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";

interface MovieCardProps {
  item: Movie | FavoriteMoviesProps;
  title?: string;
  imageStyles?: StyleProp<ImageStyle>;
}

type RootStackParamList = {
  MovieDetails: { id: number };
};

type MovieDetailsNavigationProp = NavigationProp<
  RootStackParamList,
  "MovieDetails"
>;

const MovieCard = ({ item, imageStyles, title }: MovieCardProps) => {
  const navigation = useNavigation<MovieDetailsNavigationProp>();
  const handleCardPress = () => {
    navigation.navigate("MovieDetails", {
      id: item.id,
    });
  };
  var { width, height } = Dimensions.get("window");
  return (
    <TouchableOpacity onPress={handleCardPress}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
        width={width * 0.55}
        height={height * 0.4}
        style={imageStyles}
      />
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    paddingTop: 10,
    width: 150,
    paddingHorizontal: 20,
    textAlign: "center",
  },
});

export default MovieCard;
