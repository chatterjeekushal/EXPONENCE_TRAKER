

import conf from "../conf/conf.js";

import { Client, Account, ID } from "appwrite";

export class Authservice {

    client = new client();
    account;


    
    constructor() {

        this.client
            .setEndpoint(conf.appwright_url)
            .setProject(conf.appwright_project_id);
        this.account = new this.account(this.client)
    }

    async createAccount({ email, password, name }) {

        try {

            const useraccount = await this.account.create(ID.unique(), email, password, name);

            if (useraccount) {

                // call a another mathod
                return this.login({ email, password });

            }
            else {
                return useraccount
            }

        } catch (error) {
            throw error;
        }
    }




    async login({ email, password }) {

        try {

            return await this.account.createEmailPasswordSession(
                email,
                password
            )

        } catch (error) {
            throw error
        }
    }




    async getcurrentuser() {

        try {

            return await this.account.get()

        } catch (error) {
            throw error
        }

        return null
    }




    async logout() {
        try {

            const result = await this.account.deleteSessions();

            return result

        } catch (error) {
            throw error
        }
    }

}

const authservice = new Authservice();

export default Authservice;