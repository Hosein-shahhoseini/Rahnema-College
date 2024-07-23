import { users } from "../../routes/createUser.route"
import { HttpError } from "../../utility/my-errors";

export const getExpensesById = (id: string) => {
    const user = users.find((u) => u.user_id === id);
    if (!user) {
        throw new HttpError(404, "User not found");
    }
    return user.expenses;
};
