// tests/expense.test.ts
import request from "supertest";
import { app } from "../src/api";

describe("User Expenses", () => {
    it("should create a user and get user expenses", async () => {
        await request(app)
            .post("/createUser")
            .send({
                user_id: "4",
                username: "Hosein",
                password: "1223",
                expenses: [
                    {
                        expense_id: "e3",
                        user_id: "4",
                        group_id: "g4",
                        count: 100,
                    },
                    {
                        expense_id: "e4",
                        user_id: "4",
                        group_id: "g4",
                        count: 200,
                    },
                ],
                groups: [],
            })
            .expect(200);

        const res = await request(app)
            .get("/getExpenses/4")
            .expect(200);

        expect(res.body).toEqual([
            {
                expense_id: "e3",
                user_id: "4",
                group_id: "g4",
                count: 100,
            },
            {
                expense_id: "e4",
                user_id: "4",
                group_id: "g4",
                count: 200,
            },
        ]);
    });
});
