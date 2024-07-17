import { users} from "../../routes/users.route";
import { HttpError } from   "../../utility/my-errors";
import { LoginDto } from "./dto/login-dto";

export const login = ({username , password } : LoginDto) => {
    const user = users.find((x) => x.username === username && x.password === password);
    if(user === undefined){
        throw new HttpError(401 , "INVALID USERNAME OR PASSWORD");
    }
    return user;
}