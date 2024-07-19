import { Router } from "express";
import { createUser } from "../modules/user/create_user";
import { User, userDto } from "../modules/user/dto/user.dto";



export const users:User[] = [];

export const app = Router();

app.post("/createUser", (req, res) => {
    try {
        const dto = userDto.parse(req.body)
        createUser(dto,users)
        res.send({ message: "user was added" })

    } catch (error) {
        res.send({ message: "invalid user data" })
    }
})