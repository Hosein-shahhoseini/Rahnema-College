import { Expense } from "./dto/expense.dto";

export class ExpenseRepository {
    public expenses : Expense[] = [];
    
    public Cerate(expense : Expense){
        this.expenses.push(expense);
    }
}