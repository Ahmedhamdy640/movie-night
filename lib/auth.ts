import { UserProps } from "@/types/type";
import { Client, Account, ID } from "react-native-appwrite";
import { APPWRITE_PROJECT_ID } from "../constants";

const PROJECT_ID = APPWRITE_PROJECT_ID;

const client = new Client()
  .setProject(`${PROJECT_ID}`)
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setPlatform("com.movie_night");

export interface User {
  name?: string;
  email: string;
  password: string;
}

export const createAccount = async ({ name, email, password }: User) => {
  const account = new Account(client);
  try {
    const response = await account.create(ID.unique(), email, password, name);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createSession = async ({ email, password }: User) => {
  const account = new Account(client);
  try {
    const response = await account.createEmailPasswordSession(email, password);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (): Promise<UserProps | undefined> => {
  const account = new Account(client);
  try {
    const response = await account.get();
    return response as UserProps;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  const account = new Account(client);
  try {
    await account.deleteSession("current");
  } catch (error) {
    console.log(error);
  }
};

export const createdAt = async () => {
  const account = new Account(client);
  try {
    // Retrieve the current session
    const response = await account.getSession("current");
    return response; // If the session exists, return it
  } catch (error) {
    console.log("No active session found or an error occurred:", error);
    return null; // Return null if no active session is found
  }
};
