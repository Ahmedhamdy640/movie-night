import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "../global.css";

export default function RootLayout() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle={"light-content"} />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="MovieDetails"
          options={{
            headerBackButtonDisplayMode: "default",
            headerTitle: "",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#171717" },
          }}
        />
        <Stack.Screen name="OnBoarding" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen
          name="Search"
          options={{
            headerBackButtonDisplayMode: "default",
            headerTitle: "",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#262626" },
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
