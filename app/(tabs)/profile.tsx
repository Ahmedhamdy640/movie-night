import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icons from "react-native-heroicons/solid";
import { getUser } from "@/lib/auth";
import { UserProps } from "@/types/type";

import useFavoriteStore from "@/store";
import FavoriteMovies from "@/components/FavoriteMovies";

const Profile = () => {
  const [userData, setUserData] = useState<UserProps>();

  useEffect(() => {
    const getProfileData = async () => {
      const response = await getUser();
      if (response) {
        setUserData(response);
      }
    };
    getProfileData();
  }, []);

  const { favoriteMovies } = useFavoriteStore();

  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="justify-center items-center pt-6 px-5">
          <View className="justify-center items-center">
            <Icons.UserCircleIcon size={120} color={"#a3a3a3"} />
          </View>
          <View className="mt-8 w-full">
            <View className="w-full h-12 rounded-xl bg-neutral-400 justify-start items-center my-3 flex-row">
              <Icons.IdentificationIcon
                size={30}
                color={"black"}
                style={{ marginHorizontal: 10 }}
              />
              <Text className="text-neutral-700 text-lg font-bold">
                {userData?.name}
              </Text>
            </View>
            <View className="w-full h-12 rounded-xl bg-neutral-400 justify-start items-center my-8 flex-row">
              <Icons.AtSymbolIcon
                size={30}
                color={"black"}
                style={{ marginHorizontal: 10 }}
              />
              <Text className="text-neutral-700 text-lg font-bold">
                {userData?.email}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.favoriteContainer}>
          {favoriteMovies.length > 0 ? (
            <FavoriteMovies data={favoriteMovies} title="Favorite Movies" />
          ) : (
            <Text className="text-white text-center mt-10">
              No favorite movies
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoutContainer: {
    alignItems: "flex-end",
    paddingTop: 20,
    paddingRight: 20,
    width: "100%",
  },
  favoriteContainer: {
    marginTop: 15,
  },
});

export default Profile;
