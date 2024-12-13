import { Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTextInput from "@/components/CustomTextInput";
import CustomButton from "@/components/CustomButton";
import { createSession } from "@/lib/auth";
import { router } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async (email: string, password: string) => {
    const response = await createSession({ email, password });

    if (response) {
      router.replace("/(tabs)/home");
    } else {
      Alert.alert("Error", "Sign in failed. Please try again.");
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <ScrollView className="px-5" showsVerticalScrollIndicator={false}>
        <Text className="text-center text-3xl text-orange-400 font-bold mt-12 mb-8">
          Sign In
        </Text>
        <CustomTextInput
          label="Email"
          inputStyles={{ marginBottom: 35 }}
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
        />
        <CustomTextInput
          label="Password"
          password={true}
          inputStyles={{ marginBottom: 35 }}
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
        />
        <CustomButton
          title="Sign In"
          handlePress={() => handleSignIn(form.email, form.password)}
          containerStyles="w-80 mx-auto mt-14 min-h-[62px] bg-orange-500 "
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
