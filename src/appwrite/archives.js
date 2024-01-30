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

    async createArchive({ name, desc, date, reportUrl }) {
        console.log(name, desc, date, reportUrl);
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteArchivesCollectionId,
                ID.unique(),
                {
                    name,
                    desc,
                    date,
                    reportUrl
                }
            );
        } catch (error) {
            console.log("Appwrite service :: createArchive :: error ", error);
        }
    }

    //look out for the img id returned by upload file
    // async updateArchive(id, { name, desc, date, reportUrl }) {
    //     try {
    //         return await this.databases.updateDocument(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteArchivesCollectionId,
    //             id,
    //             {
    //                 name,
    //                 desc,
    //                 date,
    //                 reportUrl
    //             }
    //         );
    //     } catch (error) {
    //         console.log("Appwrite service :: updateArchive :: error ", error);
    //     }
    // }

    async deleteArchive(id) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteArchivesCollectionId,
                id
            );

            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteArchive :: error ", error);

            return false;
        }
    }

    async getArchive(id) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteArchivesCollectionId,
                id
            );

        } catch (error) {
            console.log("Appwrite service :: getArchive :: error ", error);

            return false;
        }
    }

    async getArchives(queries = [Query.orderDesc("date")]) {
        try {
            console.log("fetching archives");
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteArchivesCollectionId,
                queries,
            );
        } catch (error) {
            console.log("Appwrite service :: geArchives :: error ", error);
        }
    }

    // // file upload services
    // async uploadFile(file) {
    //     console.log(file);
    //     try {
    //         return await this.bucket.createFile(
    //             conf.appwriteEventBucketId,
    //             ID.unique(),
    //             file
    //         );
    //     } catch (error) {
    //         console.log("Appwrite service :: uploadFile :: error ", error);

    //         return false;
    //     }
    // }

    // async deleteFile(fileId) {
    //     try {
    //         console.log('deleting event file : ', fileId);
    //         await this.bucket.deleteFile(
    //             conf.appwriteEventBucketId,
    //             fileId
    //         );

    //         return true;
    //     } catch (error) {
    //         console.log("Appwrite service :: deleteFile :: error ", error);

    //         return false;
    //     }
    // }

    // getFilePreview(fileId) {
    //     return this.bucket.getFilePreview(
    //         conf.appwriteEventBucketId,
    //         fileId
    //     );
    // }
};

const service = new Service();

export default service;