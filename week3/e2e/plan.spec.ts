import  Request  from "supertest";
import { app } from "../src/api";
import { loginAdminTest, loginRepTest } from './utility';




describe("Plan",() => {

    describe("Create" , () => {

        it("should fail if we did not login" , async() => {
            await Request(app).post("/plan").expect(401);
        });

        it.skip("should fail if user is not admin" , async() => {
            const user = await loginRepTest();
            const today = new Date();
            const tomorrow = new Date(today.setDate(today.getDate() + 1));
            const { body : plan } = await Request(app)
            .post("/plan")
            .set("Authorization" , user.id)
            .send({
                title : "Oromie" , 
                description : "Oromie kojas dige",
                deadline : tomorrow,
            })
            .expect(403);
        });

        it.skip("should create a plan if we are logged in" , async() => {
            const user  = await loginAdminTest();
            const today = new Date();
            const tomorrow = new Date(today.setDate(today.getDate() + 1));
            const { body : plan } = await Request(app)
            .post("/plan")
            .set("Authorization" , user.id)
            .send({
                title : "Oromie" , 
                description : "Oromie kojas dige",
                deadline : tomorrow,
            })
            .expect(200);
        });

        it("should send bad request if title is not provide" , async() => {

            const user  = await loginAdminTest();
            await Request(app)
            .post("/plan")
            .set("Authorization" , user.id)
            .send({ 
                description : "Oromie kojas dige"
            })
            .expect(400);
        });

    });
});

