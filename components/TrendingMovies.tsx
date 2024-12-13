import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Movie } from "@/types/type";
import Carousel from "leon-react-native-snap-carousel";
import MovieCard from "./MovieCard";

interface TrendingMoviesProps {
  data: Movie[];
}

var { width } = Dimensions.get("window");

const TrendingMovies = ({ data }: TrendingMoviesProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item, index }: { item: Movie; index: number }) => (
          <MovieCard
            item={item}
            index={index}
            imageStyles={{ borderRadius: 20 }}
          />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.55}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  text: {
    color: "white",
    fontSize: 17,
    marginBottom: 20,
    marginLeft: 15,
    fontWeight: "bold",
  },
});

export default TrendingMovies;
