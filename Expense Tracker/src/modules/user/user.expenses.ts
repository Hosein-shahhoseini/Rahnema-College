import { users } from "../../routes/user.routes";
import { Expense } from "../expense/dto/expense.dto";

export const getUserExpenses = (userId: string): { expenses: Expense[] } => {
    
    const user = users.find((x) => x.id === userId);

    if (user !== undefined) {
        return { expenses: user.expenses };
    }
    return { expenses: [] };
};