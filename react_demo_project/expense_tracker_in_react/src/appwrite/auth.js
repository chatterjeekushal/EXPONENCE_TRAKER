
import { Client, Account, ID } from "appwrite";

class Authservice {

    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteprojectId);
        
        this.account = new Account(this.client);
    }


    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            }
            return userAccount;
        } catch (error) {
            console.error("Authservice error (createAccount):", error);
            throw error;
        }
    }


    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error("Authservice error (login):", error);
            throw error;
        }
    }


    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("Authservice error (getCurrentUser):", error);
            throw error;
        }
    }


    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.error("Authservice error (logout):", error);
            throw error;
        }
    }
}


const authservice = new Authservice();
export default authservice;