import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MovieCard from "./MovieCard";
import { FavoriteMoviesProps } from "@/types/type";

interface FavoriteMovies {
  data: FavoriteMoviesProps[];
  title: string;
  containerStyle?: object;
}

const FavoriteMovies = ({ data, title, containerStyle }: FavoriteMovies) => {
  return (
    <View style={[containerStyle]}>
      <Text style={styles.text}>{title}</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingEnd: 10 }}
      >
        {data.map((item) => (
          <MovieCard
            item={item}
            key={item.id}
            imageStyles={{
              marginHorizontal: 7,
              width: 150,
              height: 240,
              borderRadius: 25,
            }}
            title={item.title}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FavoriteMovies;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  text: {
    color: "white",
    fontSize: 17,
    marginBottom: 20,
    marginLeft: 15,
    fontWeight: "bold",
  },
});
