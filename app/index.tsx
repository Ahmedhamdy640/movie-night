import { createdAt } from "@/lib/auth";
import { router } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    const checkSession = async () => {
      const session = await createdAt();
      if (session?.$id) {
        router.replace("/(tabs)/home");
      } else {
        router.replace("/OnBoarding");
      }
    };
    checkSession();
  }, []);
}
