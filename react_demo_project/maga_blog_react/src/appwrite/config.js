
import { Account, client, ID, Databases,Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Service {

    client = new client()

    Databases;
    bucket;

    constructor() {

        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteprojectId)
        
        this.Databases = new Databases(this.client)
        this.bucket = new Storage(this.client)

    }


    async createPost({ title, slug, content,featuredImage,status,userId }) {

        try {
            return await this.Databases.createDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("appwrite service error",error);
            
        }

    }


    async updatePost(slug,{ title,  content,featuredImage,status }) {

        try {
            return await this.Databases.updateDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    
                }   
            )
        } catch (error) {
            console.log("appwrite service error :: updatepost",error);
            
        }
    }


    async deletePost(slug) {

        try {
             await this.Databases.deleteDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                slug,
            )

            return true

        } catch (error) {
            console.log("appwrite service error :: deletepost",error);
            return false
        }

    }


    async getPost(slug) {

        try {
            return await this.Databases.getDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                slug
            )
        } catch (error) {
            console.log("appwrite service error :: getpost",error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {

        try {
            return await this.Databases.listDocuments(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                queries
            )
        } catch (error) {
            console.log("appwrite service error :: getposts",error);
return false            
        }
    }



// file upload service

    async uplordFile(file) {

        try {
            return await this.bucket.createFile(conf.appwritebucketId, ID.unique(), file)
        } catch (error) {
            
            console.log("appwrite service error :: uploadfile",error);
            return false
            
        }
}

async deleteFile(fileId) {

    try {
        await this.bucket.deleteFile(conf.appwritebucketId, fileId)
        return true
    } catch (error) {
        console.log("appwrite service error :: deletefile",error);
        return false
        
    }
}

 getFilePreview(fileId) {
    try {
        return  this.bucket.getFilePreview(conf.appwritebucketId, fileId)
    } catch (error) {
        console.log("appwrite service error :: getfilepreview",error);
        return false
        
    }
}

}

const Service = new Service();

export default Service