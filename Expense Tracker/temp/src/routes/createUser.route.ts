import { ZodError } from "zod";
import { User, userDto } from "../modules/uesr/dto/user.dto";
import { handelExpress } from "../utility/handel-express";
import { createUser } from "../modules/uesr/createUser";
import { Router } from "express";




export const users:User[] = []

export const app = Router();

app.post("/" , (req , res) => {
    try{
        const dto = userDto.parse(req.body);    
        handelExpress(res  , () => createUser(dto , users));
    }catch(e){
        if(e instanceof ZodError){
            res.status(400).send({message : e.errors});
        }

    }
});