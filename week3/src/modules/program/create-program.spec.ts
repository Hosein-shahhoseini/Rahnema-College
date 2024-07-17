import { ForbiddenError, HttpError } from "../../utility/my-errors";
import { canCreateProgram, creatProgram } from "./create-program";
import { program } from '../../routes/program.route';
import { date } from "zod";

describe("Create Program", () => {
    it("should not create a program if user is not rep", () => {
        expect(() =>
            canCreateProgram(
                { username: "foo", password: "bar", id: "9872", role: "Normal" },
                {
                    id: 1,
                    title: "oromeire",
                    programs: [],
                    description: " ",
                    deadline: new Date(),
                }
            )).toThrowError(ForbiddenError);
    });

    it("should not create a program if user already have a program", () => {
        expect(
                canCreateProgram(
                    {
                    username: "foo",
                    password: "bar",
                    id: "1",
                    role: "Representative",
                    },
                    {
                        id: 1,
                        title: "oromeire",
                        programs: [
                            { id: 1, title: "foo", description: "", userId: "1", planId: 1} ,
                        ],
                        description: " ",
                        deadline: new Date(),
                    }
                )
        ).toBe(false);
    });

    it("should not create program if plan deadline exceed from today" ,() => {
        const today = new Date();
        const yesterday = new Date(today.setDate(today.getDate() - 1));
        expect(
            canCreateProgram(
                {
                username: "foo",
                password: "bar",
                id: "1",
                role: "Representative",
                },
                {
                    id: 1,
                    title: "oromeire",
                    programs: [],
                    description: " ",
                    deadline: yesterday,
                }
            )
    ).toBe(false);
    });

    it("should return true" , () => {
        const today = new Date();
        const tomorrow  = new Date(today.setDate(today.getDate() + 1));
        expect(
            canCreateProgram(
                {
                username: "foo",
                password: "bar",
                id: "1",
                role: "Representative",
                },
                {
                    id: 1,
                    title: "oromeire",
                    programs: [],
                    description: " ",
                    deadline: tomorrow,
                }
            )
    ).toBe(true);
    })



});