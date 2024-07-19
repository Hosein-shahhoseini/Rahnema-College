import { Router } from "express";
import { getUserExpenses } from "../modules/user/user.expenses";

export const app = Router();

app.post("/userExpenses", (req, res) => {
    
    try {
        const myUser_id:string = req.body.user;
        const expenses = getUserExpenses(myUser_id);
        res.status(200).send({expenses});
    } catch (error) {
        res.status(400).send({message:"invalid user data"});
    }
})