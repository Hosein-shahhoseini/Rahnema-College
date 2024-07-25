import { FileDatabase } from "../../fileDatabase";
import { HttpError } from "../../utility/my-errors";
import { Group } from "../group/dto/group.dto";
import { GroupRepository } from "../group/group-repository";
import { User } from "../uesr/dto/user.dto";
import { UserRepository } from "../uesr/user.repository";
import { Expense } from "./dto/expense.dto";
import { ExpenseRepository } from "./expense-repository";




export const createExpense = (dto : Expense , expenseRep : ExpenseRepository, 
    userRep : UserRepository , groupRepo : GroupRepository , 
    expenseFile : FileDatabase<Expense> ,
    userFile : FileDatabase<User> ,
    groupFile : FileDatabase<Group> ) => {
    const user = userRep.users.find((x) => x.user_id = dto.user_id);
    const group = groupRepo.groups.find((x) => x.group_id = dto.group_id);

    const expenseExist = expenseRep.expenses.some((x) => x.expense_id = dto.expense_id);
    if (!expenseExist && user && group) {
        expenseFile.create(dto);
        
        expenseRep.expenses.push(dto);
        user.expenses.push(dto);
        group.expenses.push(dto);

    }
    else {
        throw new HttpError(404 , "User or group not found" );
    }
}