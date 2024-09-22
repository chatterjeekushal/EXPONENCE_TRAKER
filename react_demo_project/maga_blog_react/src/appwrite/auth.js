
import { Account, client, ID } from "appwrite";
import conf from "../conf/conf";

export class Authservice {

    client = new client();
    account;

    constructor() {

        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteprojectId)

        this.account = new Account(this.client);
    }


    async createAccount({ email, password, name }) {

        try {

            const userAccount = await this.account.create(

                ID.unique(),
                email,
                password,
                name
            )

            if (userAccount) {

                // call a nathor function

                return this.login({ email, password })
            }

            else {

                return userAccount
            }

        } catch (error) {
            throw error
        }
    }


    async login({ email, password }) {

        try {

            return await this.account.createEmailPasswordSession(email, password)

        } catch (error) {

            throw error
        }
    }


    async getcuurrentuser() {

        try {

            return await this.account.get()
        } catch (error) {
            throw error
        }

        return null;
    }


    async logout() {

        try {
            
            return await this.account.deleteSessions()
        } catch (error) {
            console.log(error);
            
        }
    }

}

const authservice = new Authservice();

export default Authservice
