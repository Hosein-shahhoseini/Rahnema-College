import { z } from "zod";

export const ExpensesDto = z.object({
    fee : z.number(),
    user_id: z.string().min(1),
    group_id : z.string().min(1),
    expense_id : z.string()
})

export type Expense = z.infer<typeof ExpensesDto>;  