import { Account, Client, Databases } from "appwrite";

const client = new Client();

// client
//   .setEndpoint("https://cloud.appwrite.io/v1")
//   .setProject("667992660031bbfe5c90");
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66bf73a6002940771121');

export const account = new Account(client);

// export const databases = new Databases(client, "66799343001291419dbb");
export const databases = new Databases(client, "66bf73cd00312cce7ee0");
