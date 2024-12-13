import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="Sign_in" options={{ headerShown: false }} />
      <Stack.Screen name="Sign_up" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
