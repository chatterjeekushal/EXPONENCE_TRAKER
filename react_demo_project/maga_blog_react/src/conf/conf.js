import { string } from "prop-types"

const conf={

    appwriteUrl:string(import.meta.env.VITE_APPWRITE_URL),
    appwriteprojectId:string(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwritedatabaseId:string(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritecollectionId:string(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwritebucketId:string(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf