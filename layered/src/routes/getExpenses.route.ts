import { Router } from "express";
import { z, ZodError } from "zod";
import { handelExpress } from "../utility/handel-express";
import { userDto } from "../modules/uesr/dto/user.dto";
import { getExpensesById } from "../modules/uesr/getExpensesById";
import { UserRep } from "../dependency";


export const app = Router();

app.get("/:id", (req, res) => {
    try{
        const id = z.string().parse(req.params.id);   
        handelExpress(res  , () => getExpensesById(id , UserRep));

    }catch(e){
        if(e instanceof ZodError){
            res.status(400).send({message : e.errors});
        }
    }
});
