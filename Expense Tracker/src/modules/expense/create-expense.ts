import { groups } from "../../routes/group.routes";
import { users } from "../../routes/user.routes";
import { Expense } from "./dto/expense.dto";

export const createExpense = (expense: Expense) => {

    const User = users.find((x) => x.id === expense.user_id);
    const Group = groups.find((x) => x.group_id === expense.group_id);

    if(Group !== undefined && Group.expenses.includes(expense)){
        return;
    }

    if(User !== undefined && Group !== undefined) {
        User.expenses.push(expense);
        Group.expenses.push(expense);
    }

}
