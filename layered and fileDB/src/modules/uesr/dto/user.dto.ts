import { z } from "zod";
import { expensesDto } from "../../expenses/dto/expense.dto";
import { baseGroupDto } from "../../group/dto/group.dto";



export const baseUserDto = z.object({
    user_id : z.string(),
    username : z.string(),
    password : z.string(),
    expenses : z.array(expensesDto),
});


export const userDto = baseUserDto.extend({
    groups : z.array(baseGroupDto),
});



export type User = z.infer<typeof userDto>;

