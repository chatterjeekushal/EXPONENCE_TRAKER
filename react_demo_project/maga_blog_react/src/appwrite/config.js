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

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
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
            );
        } catch (error) {
            console.error("Appwrite service error (createPost):", error);
            return null; // Return null for better error handling
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
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

    // File upload service
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(conf.appwritebucketId, ID.unique(), file);
        } catch (error) {
            console.error("Appwrite service error (uploadFile):", error);
            return null;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.appwritebucketId, fileId);
            return true;
        } catch (error) {
            console.error("Appwrite service error (deleteFile):", error);
            return false;
        }
    }

    async getFilePreview(fileId) {
        try {
            return await this.bucket.getFilePreview(conf.appwritebucketId, fileId);
        } catch (error) {
            console.error("Appwrite service error (getFilePreview):", error);
            return null;
        }
    }
}

const serviceInstance = new Service();
export default serviceInstance;
