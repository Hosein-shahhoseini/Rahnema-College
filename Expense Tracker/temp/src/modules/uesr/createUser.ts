import { User } from "./dto/user.dto";

export const createUser = (dto: User, users: User[]) => {
    const userExists = users.some((x) => x.user_id === dto.user_id);
    if (!userExists) {
        users.push(dto);
    }
}
