

import conf from "../conf/conf.js";

import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {

    client = new client();
    Databases;
    bucket;

    constructor() {

        this.client
            .setEndpoint(conf.appwright_url)
            .setProject(conf.appwright_project_id);

        this.Databases = new Databases(this.client)

        this.bucket = new Storage(this.client);

    }


    async create_post({ title, slug, content, featuredImage, status, userId }) {

        try {

            return await this.Databases.createDocument(conf.appwright_database_id, conf.appwright_collection_id, slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )

        } catch (error) {
            console.log("appwright create post error", error);
        }

    }




    async update_post(slug, { title, content, featuredImage, status }) {


        return await this.Databases.updateDocument(

            conf.appwright_database_id,
            conf.appwright_collection_id,
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }
        )

    }





    async delete_post(slug) {

        try {

            await this.Databases.deleteDocument(

                conf.appwright_database_id,
                conf.appwright_collection_id,
                slug,

            )

            return true

        } catch (error) {
            console.log("delete post error", error);
            return false
        }
    }


    async get_post(slug){
        try {
            
            return await this.Databases.getDocument(
                conf.appwright_database_id,
                conf.appwright_collection_id,
                slug,
            )

        } catch (error) {
            console.log("get post error",error);
        }
    }



}

const service = new Service()

export default Service

