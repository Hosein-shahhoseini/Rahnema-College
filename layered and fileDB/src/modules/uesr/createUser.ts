import { FileDatabase } from "../../fileDatabase";
import { User } from "./dto/user.dto";
import { UserRepository } from "./user.repository";



export const createUser = (dto: User , userRep : UserRepository , file : FileDatabase<User>)  => {
    const userExists = userRep.users.some((x) => x.user_id === dto.user_id);
    if (!userExists) {
        userRep.Create(dto);
        file.create(dto);
    }
}
