import { Account, Client, Databases } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://backend.vntres.com:444/v1')
    .setProject('65f3a32050db0b8cbee5');

export const account = new Account(client);

export const databases = new Databases(client, "65f3a533889a5597444f");
