import { Router } from "express"
import { ZodError } from "zod";
import { expense, expensesDto } from "../modules/expenses/dto/expense.dto";
import { handelExpress } from "../utility/handel-express";
import { createExpense } from "../modules/expenses/createExpense";


export const expenses: expense[] = [];

export const app = Router();


app.post("/"  , (req , res) => {
    try{
        const dto = expensesDto.parse(req.body);
        handelExpress(res , () => createExpense(dto , expenses));
    }catch(e){
        if(e instanceof ZodError){
            res.status(400).send({message : e.errors});
        }
    }
});