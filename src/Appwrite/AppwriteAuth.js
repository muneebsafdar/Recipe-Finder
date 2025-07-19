import { Account, Client ,ID} from "appwrite";
import conf from "../conf/conf";

class AppwriteAuthService {

    client= new Client()
    account;
    constructor(){
        this.client
        .setProject(conf.appwritepPojectId)
        .setEndpoint(conf.appwriteUrl)
        
        this.account= new Account(this.client)
    }


    async CreateUser(email,password,name){

        console.log(email,password,name);
        
        try {
            const userAccount=this.account.create(ID.unique(),email,password,name)
            if(userAccount){
                this.loginUser({email,password})
            }else{
                return userAccount
            }
        } catch (error) {
            console.log("CreateUser service error ",error);
        }
    }

    async loginUser({email,password}){
        
        try {
            const loginUser=await this.account.createEmailPasswordSession(email,password)
            return loginUser
        } catch (error) {
            console.log("loginUser service error ",error);
        }

        return null
    }

    async getCurrentUser(){
        try {
           return await this.account.get();
           
        } catch (error) {
            console.log("get user service erro ",error);
        }

        return null
    }

    async logoutUser(){
        try {
            await this.account.deleteSession()
        } catch (error) {
            console.log("logout service erro ",error);
        }
        return null
    }
}

const appwriteAuthService = new AppwriteAuthService();
export default appwriteAuthService;