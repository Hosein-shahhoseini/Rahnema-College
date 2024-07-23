import { groups } from "../../routes/createGroup.route";
import { users } from "../../routes/createUser.route";
import { HttpError } from "../../utility/my-errors";
import { expense } from "./dto/expense.dto";




export const createExpense = (dto : expense , expense : expense[]) => {
    const user = users.find((x) => x.user_id = dto.user_id);
    const group = groups.find((x) => x.group_id = dto.group_id);

    const expenseExist = expense.some((x) => x.expense_id = dto.expense_id);
    if (!expenseExist && user && group) {
        expense.push(dto);
        user.expenses.push(dto);
        group.expenses.push(dto);
    }
    else {
        throw new HttpError(404 , "User or group not found" );
    }
}