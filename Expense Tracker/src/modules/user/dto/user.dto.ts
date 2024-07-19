import { z } from "zod";
import { ExpensesDto } from "../../expense/dto/expense.dto";
import { baseGroupDto } from "../../group/dto/group.dto";

export const baseUserDto = z.object({
    id :z.string().min(1),
    username : z.string(),
    password : z.string(),
    expenses : z.array(ExpensesDto),
});   

export const userDto = baseUserDto.extend({
    groups: z.array(baseGroupDto),
  });
  

export type User = z.infer<typeof userDto>;