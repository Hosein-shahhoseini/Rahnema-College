import { HttpError } from "../../utility/my-errors";
import { UserRepository } from "./user.repository";

export const getExpensesById = (id: string , userRep : UserRepository) => {
    const user = userRep.users.find((u) => u.user_id === id);
    if (!user) {
        throw new HttpError(404, "User not found");
    }
    return user.expenses;
};
