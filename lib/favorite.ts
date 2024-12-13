import { Databases, Client, Account, Query } from "react-native-appwrite";

const PROJECT_ID = process.env.APPWRITE_PROJECT_ID;
const DATABASE_ID = process.env.APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.APPWRITE_COLLECTION_ID;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(`${PROJECT_ID}`);

const database = new Databases(client);

export const addFavoriteMovie = async (
  movieId: number,
  poster: string,
  title: string
) => {
  try {
    const account = new Account(client);
    const user = await account.get();
    const response = await database.createDocument(
      `${DATABASE_ID}`,
      `${COLLECTION_ID}`,
      "unique()",
      {
        id: movieId,
        poster_url: poster,
        title: title,
        userId: user.$id,
      }
    );
    return response;
  } catch (error) {
    console.error("Error adding favorite movie:", error);
    throw error;
  }
};

export const getFavoriteMovies = async () => {
  try {
    const account = new Account(client);
    const user = await account.get(); // Fetch the authenticated user's details

    const response = await database.listDocuments(
      `${DATABASE_ID}`,
      `${COLLECTION_ID}`,
      [
        Query.equal("userId", user.$id), // Fetch movies only for this user
      ]
    );
    return response.documents;
  } catch (error) {
    console.error("Error fetching favorite movies:", error);
    throw error;
  }
};

export const removeFavoriteMovie = async (documentId: string) => {
  try {
    const response = await database.deleteDocument(
      `${DATABASE_ID}`,
      `${COLLECTION_ID}`,
      documentId
    );
    return response;
  } catch (error) {
    console.error("Error removing favorite movie:", error);
    throw error;
  }
};
