import { Text, StatusBar, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import friends from "../assets/images/friends.png";
import CustomButton from "@/components/CustomButton";

const OnBoarding = () => {
  return (
    <SafeAreaView
      className="flex-1 bg-neutral-800 pt-3"
      // style={styles.container}
    >
      <StatusBar barStyle={"light-content"} />
      <Text style={styles.mainText}>
        Find Your movie with personalized exclusive content
      </Text>
      <Image
        source={friends}
        className={"w-full max-h-40 mt-16"}
        resizeMode={"contain"}
        style={styles.image}
      />
      <Text style={styles.subText}>Have a Greate Movie Night! 🍿</Text>
      <CustomButton
        title="Continue"
        handlePress={() => router.replace("/(auth)/Sign_up")}
        containerStyles="w-80 mx-auto mt-28 bg-orange-500 "
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626",
    paddingTop: 10,
  },
  mainText: {
    color: "#dbeafe",
    fontSize: 30,
    lineHeight: 40,
    textAlign: "center",
    paddingTop: 80,
    paddingHorizontal: 15,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    maxHeight: 200,
    marginTop: 40,
  },
  subText: {
    color: "#fdba74",
    fontSize: 25,
    lineHeight: 30,
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "center",
    paddingHorizontal: 17,
  },
});

export default OnBoarding;
