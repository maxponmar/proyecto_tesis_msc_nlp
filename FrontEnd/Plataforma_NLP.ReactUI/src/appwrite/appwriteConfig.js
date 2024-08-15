import { Account, Client, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("667992660031bbfe5c90");

export const account = new Account(client);

export const databases = new Databases(client, "66799343001291419dbb");
