import { Router } from "express";
import { ZodError } from "zod";
import { Group, groupDto } from "../modules/group/dto/group.dto";
import { handelExpress } from "../utility/handel-express";
import { createGroup } from "../modules/group/createGroup";
import { GroupFileDB, GroupRep } from "../dependency";




export const app = Router(); 


app.post("/" , (req , res) => {
    try{
        const dto = groupDto.parse(req.body);
        handelExpress(res , () => createGroup(dto , GroupRep , GroupFileDB));
    }catch(e){
        if(e instanceof ZodError){
            res.status(400).send({message : e.errors});
        }
    }
});