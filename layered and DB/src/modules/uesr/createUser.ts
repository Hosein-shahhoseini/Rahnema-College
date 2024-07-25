import { User } from "./dto/user.dto";
import { UserRepository } from "./user.repository";



export const createUser = (dto: User , userRep : UserRepository)  => {
    const userExists = userRep.users.some((x) => x.user_id === dto.user_id);
    if (!userExists) {
        userRep.Create(dto);
    }
}
