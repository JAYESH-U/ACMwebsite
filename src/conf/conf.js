const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteBodCollectionId: String(import.meta.env.VITE_APPWRITE_BOD_COLLECTION_ID),
    appwriteEventsCollectionId: String(import.meta.env.VITE_APPWRITE_EVENTS_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;