import Request from "supertest"
import { app } from "../src/api"


describe("creating group" , () => {
    it("should create a group" , async() => {
        const res = await Request(app)
        .post("/createGroup")
        .send({
            title : "birthday party" ,
            group_id : "1",
            expenses : [] ,
            users : [],
        })
        .expect(200);
    });
});