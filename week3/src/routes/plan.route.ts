import { Router } from "express";
import { user, users } from "./users.route";
import { isNonEmptyString } from "../utility/non-empty-string";
import { HttpError } from "../utility/my-errors";
import { handelExpress } from "../utility/handel-express";
import { createPaln } from "../modules/plan/create-plan";
import { getPalnById } from "../modules/plan/get-plan-by-id";
import { z, ZodError } from "zod";
import { createPlanDto } from "../modules/plan/dto/create-plan-dto";
import { program } from './program.route';
import { loginMiddleware } from "../utility/login.middleware";

export const app = Router();

export interface plan {
    id: number;
    title: string;
    description: string;
    deadline: Date;
    programs : program[];
}


export const plans: plan[] = [];



app.post("/", loginMiddleware ,(req, res) => {
    try {
        console.log("myyyyyyy id : ");
        const dto = createPlanDto.parse(req.body);
        handelExpress(res , () =>   createPaln(dto , req.user));
    }catch(e){
        if(e instanceof ZodError){
            res.status(400).send({message : e.errors});
        }
    }
    //create plan
   
});


app.get("/:id", (req, res) => {
    try{
        const id = z.coerce.number().parse(req.params.id);
        // console.log("myyyyyyy id : "+getPalnById(id).id);
        handelExpress(res , () => getPalnById(id));
    }catch(e)
    {
        if(e instanceof ZodError){
            res.status(400).send({message : e.errors});
        }
    }
});
