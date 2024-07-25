import { z } from "zod";

export const expensesDto = z.object({
    expense_id: z.string(),
    user_id: z.string(),
    group_id: z.string(),
    count: z.coerce.number(),
});

export type Expense = z.infer<typeof expensesDto>;
