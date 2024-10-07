
import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf";



class Service {
    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteprojectId);
        
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({id,text,amount,status,userblance}) {
        try {
            return await this.databases.createDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                ID.unique(),
                {
                    userID:id,
                    exponencename: text,
                    exponenceamount: amount,
                    exstatus: status,
                    updateuserbalance:userblance,
                }
            );
        } catch (error) {
            console.error("Appwrite service error (createPost):", error);
            return null; // Return null for better error handling
        }
    }

    async updatePost(slug, { title, content, featuredImage, status, }) {
        try {
            return await this.databases.updateDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.error("Appwrite service error (updatePost):", error);
            return null;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                slug,
            );
            return true;
        } catch (error) {
            console.error("Appwrite service error (deletePost):", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                slug
            );
        } catch (error) {
            console.error("Appwrite service error (getPost):", error);
            return null;
        }
    }

    async listDocuments(quarykey, quaryvalue) {

        try {
            
            return await this.databases.listDocuments(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                [Query.equal(quarykey, quaryvalue)]
            )

        } catch (error) {
            console.log("Appwrite service error (listDocuments):", error);
            
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                queries
            );
        } catch (error) {
            console.error("Appwrite service error (getPosts):", error);
            return [];
        }
    }

}

const serviceInstance = new Service();

export default serviceInstance;