import { Router } from "express";
import { Expense, ExpensesDto } from "../modules/expense/dto/expense.dto";



export const expenses:Expense[] = []

export const app = Router()

app.post("/createExpense", (req, res) => {
    try {
        const expense = ExpensesDto.parse(req.body)
        expenses.push(expense)
        res.send({ message: "expense was added" })
    } catch (error) {
        res.send({ message: "invalid expense data" })
    }
})