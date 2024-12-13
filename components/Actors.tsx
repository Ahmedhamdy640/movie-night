import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { CastMember } from "@/types/type";
import * as Icons from "react-native-heroicons/solid";

interface ActorsProps {
  actor: CastMember;
  index?: number;
}

const Actors = ({ actor, index }: ActorsProps) => {
  return (
    <View key={actor.id} style={styles.container}>
      {actor?.profile_path ? (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w200${actor?.profile_path}`,
          }}
          style={{ width: 70, height: 70, borderRadius: 50 }}
        />
      ) : (
        <Icons.UserIcon size={70} color={"white"} />
      )}
      <View style={styles.actorDetails}>
        <Text className="text-white text-center  mb-2 text-lg font-semibold">
          {actor.name}
        </Text>
        <Text className="text-neutral-400 text-center text-sm">
          as {actor.character}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 15,
  },
  actorDetails: {
    marginLeft: 15,
    alignItems: "flex-start",
    paddingTop: 5,
  },
});

export default Actors;
