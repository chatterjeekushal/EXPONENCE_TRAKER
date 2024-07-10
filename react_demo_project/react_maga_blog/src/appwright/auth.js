import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class Authservice {
    constructor() {
        this.client = new Client();
        this.account = new Account(this.client);

        this.client
            .setEndpoint(conf.appwright_url)
            .setProject(conf.appwright_project_id);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                // call another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authservice = new Authservice();

export default authservice;
