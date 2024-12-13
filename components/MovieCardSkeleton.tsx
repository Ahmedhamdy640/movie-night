import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

var { width } = Dimensions.get("window");

const MovieCardSkeleton = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Trending Section */}
      <View style={styles.section}>
        <ShimmerPlaceHolder
          style={[styles.sectionTitle, { marginLeft: 15 }]}
          LinearGradient={LinearGradient}
        />
        <View style={styles.movieRow}>
          <ShimmerPlaceHolder
            style={styles.semimovieCardLeft}
            LinearGradient={LinearGradient}
          />
          <ShimmerPlaceHolder
            style={styles.movieCardPrimary}
            LinearGradient={LinearGradient}
          />
          <ShimmerPlaceHolder
            style={styles.semimovieCardRight}
            LinearGradient={LinearGradient}
          />
        </View>
      </View>

      {/* Top Rated Section */}
      <View style={styles.topRatedSection}>
        <ShimmerPlaceHolder
          style={styles.sectionTitle}
          LinearGradient={LinearGradient}
        />
        <View style={styles.movieRow}>
          <View style={{ alignItems: "center" }}>
            <ShimmerPlaceHolder
              style={styles.movieCard}
              LinearGradient={LinearGradient}
            />
            <ShimmerPlaceHolder
              style={styles.movieTitle}
              LinearGradient={LinearGradient}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <ShimmerPlaceHolder
              style={styles.movieCard}
              LinearGradient={LinearGradient}
            />
            <ShimmerPlaceHolder
              style={styles.movieTitle}
              LinearGradient={LinearGradient}
            />
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <ShimmerPlaceHolder
              style={styles.semiTopRatedMovieCardRight}
              LinearGradient={LinearGradient}
            />
            <ShimmerPlaceHolder
              style={styles.semiMovieTitle}
              LinearGradient={LinearGradient}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626",
  },
  section: {
    marginBottom: 30,
    marginTop: 20,
  },
  topRatedSection: {
    marginBottom: 40,
    marginTop: 20,
    paddingLeft: 15,
  },
  sectionTitle: {
    width: 130,
    height: 20,
    marginBottom: 20,
    borderRadius: 8,
  },
  movieRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  movieCard: {
    width: width * 0.34,
    height: 200,
    borderRadius: 25,
  },
  semimovieCardLeft: {
    width: 90,
    height: 250,
    borderRadius: 25,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  semimovieCardRight: {
    width: width * 0.2,
    height: 250,
    borderRadius: 25,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  semiTopRatedMovieCardRight: {
    width: width * 0.2,
    height: 200,
    borderRadius: 25,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  movieCardPrimary: {
    width: width * 0.5,
    height: 300,
    borderRadius: 25,
  },
  movieTitle: {
    width: width * 0.3,
    height: 13,
    marginTop: 10,
    borderRadius: 8,
  },
  semiMovieTitle: {
    width: width * 0.17,
    height: 13,
    marginTop: 10,
    borderStartEndRadius: 8,
    borderStartStartRadius: 8,
  },
});

export default MovieCardSkeleton;
