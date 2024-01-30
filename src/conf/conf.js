const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),

    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),

    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

    appwriteBodCollectionId: String(import.meta.env.VITE_APPWRITE_BOD_COLLECTION_ID),
    appwriteEventsCollectionId: String(import.meta.env.VITE_APPWRITE_EVENTS_COLLECTION_ID),
    appwriteArchivesCollectionId: String(import.meta.env.VITE_APPWRITE_ARCHIVES_COLLECTION_ID),

    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteMemberBucketId: String(import.meta.env.VITE_APPWRITE_MEMBER_BUCKET_ID),
    appwriteEventBucketId: String(import.meta.env.VITE_APPWRITE_EVENT_BUCKET_ID),

    emailjsServiceId: String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
    emailjsTemplateId: String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
    emailjsPublicKey: String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
};

export default conf;