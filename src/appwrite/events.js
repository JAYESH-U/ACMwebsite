import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    async createEvent({ name, desc, date, tags, collabwith, img, reglink }) {
        console.log(name, desc, date, tags, collabwith, img, reglink);
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteEventsCollectionId,
                ID.unique(),
                {
                    name,
                    desc,
                    date,
                    tags,
                    collabwith,
                    img,
                    reglink
                }
            );
        } catch (error) {
            console.log("Appwrite service :: createPost :: error ", error);
        }
    }

    //look out for the img id returned by upload file
    async updateEvent(id, { name, desc, date, tags, collabwith, img, reglink }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteEventsCollectionId,
                id,
                {
                    name,
                    desc,
                    date,
                    tags,
                    collabwith,
                    img,
                    reglink
                }
            );
        } catch (error) {
            console.log("Appwrite service :: updateEvent :: error ", error);
        }
    }

    async deleteEvent(id) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteEventsCollectionId,
                id
            );

            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteEvent :: error ", error);

            return false;
        }
    }

    async getEvent(id) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteEventsCollectionId,
                id
            );

        } catch (error) {
            console.log("Appwrite service :: getEvent :: error ", error);

            return false;
        }
    }

    async getEvents(queries = [Query.orderDesc("date")]) {
        try {
            console.log("fetching events");
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteEventsCollectionId,
                queries,
            );
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error ", error);
        }
    }

    // file upload services
    async uploadFile(file) {
        console.log(file);
        try {
            return await this.bucket.createFile(
                conf.appwriteEventBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error ", error);

            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            console.log('deleting event file : ', fileId);
            await this.bucket.deleteFile(
                conf.appwriteEventBucketId,
                fileId
            );

            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error ", error);

            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteEventBucketId,
            fileId
        );
    }
};

const service = new Service();

export default service;