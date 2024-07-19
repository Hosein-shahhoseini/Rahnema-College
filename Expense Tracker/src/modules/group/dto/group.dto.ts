import { array, z } from "zod";
import { ExpensesDto } from "../../expense/dto/expense.dto";
import { baseUserDto } from "../../user/dto/user.dto";

export const baseGroupDto = z.object({
    group_id: z.string().min(1),
    name: z.string(),
    expenses: z.array(ExpensesDto)
});

export const groupDto = baseGroupDto.extend({
    users : z.array(baseUserDto)
});

export type Group = z.infer<typeof groupDto>;