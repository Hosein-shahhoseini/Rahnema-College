import { Router } from "express";
import { users } from "./createUser.route";
import { z, ZodError } from "zod";
import { handelExpress } from "../utility/handel-express";
import { userDto } from "../modules/uesr/dto/user.dto";
import { getExpensesById } from "../modules/uesr/getExpensesById";


export const app = Router();

app.get("/:id", (req, res) => {
    try{
        const id = z.string().parse(req.params.id);   
        handelExpress(res  , () => getExpensesById(id));

    }catch(e){
        if(e instanceof ZodError){
            res.status(400).send({message : e.errors});
        }
    }
});
