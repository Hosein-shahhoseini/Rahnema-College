import { User } from "./dto/user.dto"

export const createUser = (dto: User, users: User[]) => {

    const myUser = users.find((x) => x.id === dto.id);

    if (myUser === undefined) {
        users.push(dto);
    }
}