

import conf from "../conf/conf.js";

import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {

    client = new Client();
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


    async get_post(slug) {
        try {

            return await this.Databases.getDocument(
                conf.appwright_database_id,
                conf.appwright_collection_id,
                slug,
            )

        } catch (error) {
            console.log("get post error", error);
        }
    }


    async all_post(queries = [Query.equal("status", "active")]) {

        try {

            return await this.Databases.listDocuments(
                conf.appwright_database_id,
                conf.appwright_collection_id,
                queries
            )

        } catch (error) {
            console.log("all post error", error);
            return false
        }
    }


    // file upload service


    async uplord_file(file) {

        try {

            return await this.bucket.createFile(
                conf.appwright_bucket_id,
                ID.unique(),
                file,
            )

        } catch (error) {
            console.log("upload file error", error);
        }
    }


    async delete_file(file_id) {

        try {

            return this.bucket.deleteFile(
                conf.appwright_bucket_id,
                file_id,
            )
            return true

        } catch (error) {
            console.log("delete file error", error);
            return false
        }
    }

    
    get_file_preview(file_id){

        return this.bucket.getFilePreview(
            conf.appwright_bucket_id,
            file_id
        )
    }

    

}

const service = new Service()

export default service

