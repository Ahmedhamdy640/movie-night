import { Text } from "react-native";
import React from "react";
import { router, Tabs } from "expo-router";
import * as OutlineIcons from "react-native-heroicons/outline";
import * as SolidIcons from "react-native-heroicons/solid";
import { logout } from "@/lib/auth";

const TabLayout = () => {
  const logoutHandlePress = () => {
    logout();
    router.replace("/OnBoarding");
  };
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#393939",
            height: 60,
            paddingBottom: 5,
          },
          tabBarLabelStyle: {
            color: "white",
            fontSize: 14,
            fontWeight: "bold",
          },
          tabBarActiveTintColor: "orange",
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerRight: () => (
              <OutlineIcons.MagnifyingGlassIcon
                size={30}
                color={"white"}
                style={{ marginRight: 10 }}
                onPress={() => router.push("/Search")}
              />
            ),
            headerTitle: () => (
              <Text className="text-2xl font-bold">
                <Text className="text-blue-400">Movie</Text>{" "}
                <Text className="text-orange-400">Night</Text>
              </Text>
            ),
            headerStyle: {
              backgroundColor: "#262626",
            },
            headerTitleAlign: "center",
            tabBarIcon: ({ color, focused }) =>
              focused ? (
                <SolidIcons.HomeIcon
                  size={24}
                  color={focused ? color : "white"}
                />
              ) : (
                <OutlineIcons.HomeIcon
                  size={24}
                  color={focused ? color : "white"}
                />
              ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerRight: () => (
              <OutlineIcons.ArrowLeftStartOnRectangleIcon
                size={30}
                color={"red"}
                style={{ marginRight: 10 }}
                onPress={logoutHandlePress}
              />
            ),
            headerStyle: {
              backgroundColor: "#262626",
            },
            headerTitle: () => "",
            tabBarIcon: ({ color, focused }) =>
              focused ? (
                <SolidIcons.UserIcon
                  size={24}
                  color={focused ? color : "white"}
                />
              ) : (
                <OutlineIcons.UserIcon
                  size={24}
                  color={focused ? color : "white"}
                />
              ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
