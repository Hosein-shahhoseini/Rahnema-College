import { z } from "zod";
import { expensesDto } from "../../expenses/dto/expense.dto";
import { baseUserDto, userDto } from "../../uesr/dto/user.dto";

export const baseGroupDto = z.object({
    title : z.string(),
    group_id : z.string(),
    expenses : z.array(expensesDto),
});

export const groupDto = baseGroupDto.extend({
    users : z.array(baseUserDto),
}); 

export type Group = z.infer<typeof groupDto>;