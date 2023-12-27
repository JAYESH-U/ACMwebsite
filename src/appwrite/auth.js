import { Client, Account } from 'appwrite';
import conf from '../conf/conf.js';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                // call another method.... (u can login)
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite service :: createAccount :: error: ", error);
        }
    }

    async login({ email, password }) {
        try {
            console.log("loggin in");
            console.log(email, password);
            const userlogin = await this.account.createEmailSession(email, password);
            return userlogin;
        } catch (error) {
            console.log("Appwrite service :: login :: error: ", error.response.message);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error: ", error);
        }

        return null;
    }

    async logOut() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logOut :: error: ", error);
        }

        return null;
    }

};

const authService = new AuthService();

export default authService;