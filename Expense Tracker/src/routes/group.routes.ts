import { Router } from "express";
import { Group, groupDto } from "../modules/group/dto/group.dto";
import { createGroup } from "../modules/group/create-group";



export const groups:Group[] = [];

export const app = Router();

app.post("/createGroup", (req, res) => {
    try {
        const dto = groupDto.parse(req.body);
        createGroup(dto,groups);
        res.send({ message: "group was added" });
    }

    catch (error) {
        res.status(400).send({ message: "bad request" });
    }   
})