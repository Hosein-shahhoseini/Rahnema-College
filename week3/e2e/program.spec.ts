import Request  from "supertest";
import { app } from "../src/api";
import { loginAdminTest, loginRepTest } from "./utility";
import { request } from "express";
import { plans } from './../src/routes/plan.route';

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

            await Request(app)
            .post("/program")
            .set("Authorization" , repUser.id)
            .send({
                title : "oromieqq",
                planId : plan.id,
            })
            .then((res) => console.log(res.body));
        });
    });
});