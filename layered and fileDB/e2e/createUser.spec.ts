import Request  from "supertest";
import { app } from "../src/api";

describe("user" ,() => {
    it("should create a user" , async() => {
        const res = await Request(app)
        .post("/createUser")
        .send({
            user_id : "1", 
            username : "ali" ,
            password : "1223" ,
            expenses: [] ,
            groups : [],
        })
        .expect(200);
    });
});