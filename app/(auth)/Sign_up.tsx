import { Text, ScrollView, View, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTextInput from "@/components/CustomTextInput";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { createAccount } from "@/lib/auth";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignUp = async (
    name: string,
    email: string,
    password: string
  ) => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    const response = await createAccount({
      name,
      email: trimmedEmail,
      password: trimmedPassword,
    });

    if (response) {
      router.replace("/(tabs)/home");
    } else {
      Alert.alert("Error", "Sign up failed. Please try again.");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <ScrollView className="px-5" showsVerticalScrollIndicator={false}>
        <Text className="text-center text-3xl text-orange-400 font-bold mt-12 mb-8">
          Sign Up
        </Text>
        <CustomTextInput
          label="Name"
          inputStyles={{ marginBottom: 30 }}
          value={form.name}
          onChangeText={(value) => setForm({ ...form, name: value })}
        />
        <CustomTextInput
          label="Email"
          inputStyles={{ marginBottom: 30 }}
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
        />
        <CustomTextInput
          label="Password"
          password={true}
          inputStyles={{ marginBottom: 30 }}
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
        />
        <CustomButton
          title="Sign Up"
          handlePress={() => handleSignUp(form.name, form.email, form.password)}
          containerStyles="w-80 mx-auto mt-14 bg-orange-500 min-h-[62px]"
        />
        <View className="flex-row justify-center mt-10">
          <Text className="text-white text-base">
            You already have an account?
          </Text>
          <Text
            className="text-orange-400 text-base"
            onPress={() => router.push("/(auth)/Sign_in")}
          >
            {"  "}Sign In
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
