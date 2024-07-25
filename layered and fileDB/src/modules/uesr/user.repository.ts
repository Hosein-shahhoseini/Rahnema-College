import { User } from "./dto/user.dto";



export class UserRepository {
    public users : User[] = [];

    public Create(user : User){
        this.users.push(user);
    }
}