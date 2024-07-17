import Request  from "supertest";
import { app } from "../src/api";
import { loginAdminTest, loginRepTest } from "./utility";
import { request } from "express";

describe("Program" , () => {
    describe("Create" , () => {
        it("should fail if we did not login" , async() => {
           await Request(app).post("/program").expect(401);
        });

        it.skip("should create a program" , async() => {
            const adminUser = await loginAdminTest();
            const repUser = await loginRepTest();

            const today = new Date();
            const tomorrow = new Date(today.setDate(today.getDate() + 1));
            const { body : plan } = await Request(app)
            .post("/plan")
            .set("Authorization" , adminUser.id)
            .send({
                title : "Oromie" , 
                description : "Oromie kojas dige",
                deadline : tomorrow,
            })
            .expect(200);

            const {body : program} = await Request(app)
            .post("/program")
            .set("Authorization" , repUser.id)
            .send({
                title : "oromiew",
                planId : plan.id,
            })
            .expect(200);
        });
    });
});