import { HttpError } from "../../utility/my-errors";
import { GroupRepository } from "../group/group-repository";
import { UserRepository } from "../uesr/user.repository";
import { Expense } from "./dto/expense.dto";
import { ExpenseRepository } from "./expense-repository";




export const createExpense = (dto : Expense , expenseRep : ExpenseRepository, 
    userRep : UserRepository , groupRepo : GroupRepository) => {
    const user = userRep.users.find((x) => x.user_id = dto.user_id);
    const group = groupRepo.groups.find((x) => x.group_id = dto.group_id);

    const expenseExist = expenseRep.expenses.some((x) => x.expense_id = dto.expense_id);
    if (!expenseExist && user && group) {
        expenseRep.expenses.push(dto);
        user.expenses.push(dto);
        group.expenses.push(dto);
    }
    else {
        throw new HttpError(404 , "User or group not found" );
    }
}