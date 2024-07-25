import { ZodError } from "zod";
import { User, userDto } from "../modules/uesr/dto/user.dto";
import { handelExpress } from "../utility/handel-express";
import { createUser } from "../modules/uesr/createUser";
import { Router } from "express";
import { UserFileDB, UserRep } from "../dependency";





export const app = Router();

app.post("/" , (req , res) => {
    try{
        const dto = userDto.parse(req.body);    
        handelExpress(res  , () => createUser(dto , UserRep , UserFileDB));
    }catch(e){
        if(e instanceof ZodError){
            res.status(400).send({message : e.errors});
        }

    }
});