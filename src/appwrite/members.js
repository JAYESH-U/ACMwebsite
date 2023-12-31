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

    async createMember({ name, desc, post, category, sem, img, term, dept }) {
        console.log( name, desc, post, category, sem, img, term, dept);
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteBodCollectionId,
                ID.unique(),
                {
                    name, 
                    desc, 
                    post, 
                    category, 
                    sem, 
                    img, 
                    term, 
                    dept
                }
            );
        } catch (error) {
            console.log("Appwrite service :: createMember :: error ", error);
        }
    }

    //look out for the img id returned by upload file
    async updateMember(id, { name, desc, post, category, sem, img, term, dept }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteBodCollectionId,
                id,
                {
                    name, 
                    desc, 
                    post, 
                    category, 
                    sem, 
                    img, 
                    term, 
                    dept
                }
            );
        } catch (error) {
            console.log("Appwrite service :: updateMember :: error ", error);
        }
    }

    async deleteMember(id) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteBodCollectionId,
                id
            );

            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteMember :: error ", error);

            return false;
        }
    }

    async getMember(id) {
        console.log("Getting an member of id : ", id);
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteBodCollectionId,
                id
            );

        } catch (error) {
            console.log("Appwrite service :: getMember :: error ", error);

            return false;
        }
    }

    async getMembers(queries = [Query.orderDesc("name")]) {
        console.log("getting members....");
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteBodCollectionId,
                queries,
            );
        } catch (error) {
            console.log("Appwrite service :: getMembers :: error ", error);
        }
    }

    // file upload services
    async uploadFile(file) {
        console.log(file);
        try {
            return await this.bucket.createFile(
                conf.appwriteMemberBucketId,
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
            await this.bucket.deleteFile(
                conf.appwriteMemberBucketId,
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
            conf.appwriteMemberBucketId,
            fileId
        );
    }
};

const service = new Service();

export default service;