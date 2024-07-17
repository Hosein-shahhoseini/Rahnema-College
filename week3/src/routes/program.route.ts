import { Router } from "express";
import { users } from "./users.route";
import { isNonEmptyString } from "../utility/non-empty-string";
import { createProgramDto } from "../modules/program/dto/create-program.dto";
import { handelExpress } from "../utility/handel-express";
import { creatProgram } from "../modules/program/create-program";
import { ZodError } from "zod";
import { loginMiddleware } from "../utility/login.middleware";

export interface program  {
    id : number ,
    planId : number ,
    title : string ,
    description : string,
    userId : string ,

}

export const app = Router();

app.post("/" , loginMiddleware ,(req , res) => {
    try{
        const dto = createProgramDto.parse(req.body);
        handelExpress(res , () => creatProgram(dto , req.user));
    }catch(e){
        if(e instanceof ZodError){
            res.status(400).send({ message : e.errors});
        }
    }
})