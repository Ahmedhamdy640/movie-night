import React, { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSearch } from "@/hooks/search";
import MovieCard from "@/components/MovieCard";
import { useDebounce } from "@/hooks/useDebounce";

var { width, height } = Dimensions.get("window");

const Search = () => {
  const [movieName, setMovieName] = useState("");
  const debouncedMovieName = useDebounce(movieName);
  const {
    data: searchedMovies,
    isLoading,
    error,
  } = useSearch(debouncedMovieName);

  const data = searchedMovies?.results;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Search for a movie..."
          placeholderTextColor="#9CA3AF" // Slightly lighter gray for contrast
          value={movieName}
          onChangeText={(value) => setMovieName(value)}
        />
      </View>

      <View style={{ flex: 1 }}>
        {isLoading && <ActivityIndicator size="large" color="#FFFFFF" />}
        {!isLoading && !error && (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <MovieCard item={item} imageStyles={styles.image} />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.listContent}
            style={styles.list}
            ListEmptyComponent={
              <Text style={styles.emptyText}>
                No movies found. Try a different keyword.
              </Text>
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626",
  },
  inputWrapper: {
    position: "relative",
    marginHorizontal: 15,
    marginVertical: 30,
  },
  textInput: {
    backgroundColor: "#454545",
    height: 55,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingRight: 40,
    color: "#FFFFFF",
    fontSize: 18,
  },
  icon: {
    position: "absolute",
    right: 15,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  errorText: {
    color: "#F87171",
    textAlign: "center",
    marginTop: 20,
  },
  emptyText: {
    color: "#9CA3AF",
    textAlign: "center",
    marginTop: 20,
  },
  image: {
    width: width * 0.45,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  list: {
    flex: 1,
    backgroundColor: "#262626",
  },
  listContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    alignItems: "center",
  },
});
