

// src/appwrite.js
import { Client, Account, Databases, Storage } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66ee95420030d4ec2ab5');

    export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);