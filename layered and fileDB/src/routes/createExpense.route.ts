import { Router } from "express"
import { ZodError } from "zod";
import { Expense, expensesDto } from "../modules/expenses/dto/expense.dto";
import { handelExpress } from "../utility/handel-express";
import { createExpense } from "../modules/expenses/createExpense";
import { ExpenseFileDB, ExpenseRep, GroupRep, UserFileDB, UserRep } from "../dependency";
import { GroupFileDB } from './../dependency';



export const app = Router();


app.post("/"  , (req , res) => {
    try{
        const dto = expensesDto.parse(req.body);
        handelExpress(res , () => createExpense(dto , ExpenseRep , UserRep , GroupRep , ExpenseFileDB , UserFileDB , GroupFileDB));
    }catch(e){
        if(e instanceof ZodError){
            res.status(400).send({message : e.errors});
        }
    }
});