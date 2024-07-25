
import request from "supertest";
import { app } from "../src/api";

describe("Expenses", () => {
    it("should create a user, create a group, and then create an expense", async () => {

        await request(app)
            .post("/createUser")
            .send({
                user_id: "1",
                username: "Hosein",
                password: "1223",
                expenses: [],
                groups: [],
            })
            .expect(200);
    

        await request(app)
            .post("/createGroup")
            .send({
                title: "Group",
                group_id: "g1",
                expenses: [],
                users: [],
            })
            .expect(200);


        await request(app)
            .post("/createExpense")
            .send({
                expense_id: "e1",
                user_id: "1",
                group_id: "g1",
                count: 100,
            })
            .expect(200);

        const res = await request(app)
            .get("/getExpenses/1")
            .expect(200);

        expect(res.body).toEqual([
            {
                expense_id: "e1",
                user_id: "1",
                group_id: "g1",
                count: 100,
            },
        ]);
    });

    it("should return 404 if user or group does not exist", async () => {
        await request(app)
            .post("/createExpense")
            .send({
                expense_id: "e2",
                user_id: "2",
                group_id: "g2",
                count: 200,
            })
            .expect(404);
    });
});
