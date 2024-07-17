import { Router } from "express";
import { v4 } from "uuid";
import { isNonEmptyString } from "../utility/non-empty-string";
import { handelExpress } from "../utility/handel-express";
import { ZodError } from "zod";
import { loginDto } from "../modules/user/dto/login-dto";
import { login } from "../modules/user/login";

export const app = Router();


type UserRole = "Admin" | "Representative" | "Normal";



export interface user {
    id: string;
    username: string;
    password: string;
    role: UserRole;
}

export const users: user[] = [
    { id: v4(), username: "admin", password: "admin", role: "Admin" },
    { id: v4(), username: "rep", password: "rep", role: "Representative" }
];




app.post("/login", (req, res) => {
    try{
        const dto = loginDto.parse(req.body);
        handelExpress(res , () => login(dto));
    }catch(e){
        if(e instanceof ZodError){
            res.status(400).send({message : e.errors});
        }
    }
});
