import { ExpenseRepository } from "./modules/expenses/expense-repository";
import { GroupRepository } from "./modules/group/group-repository";
import { UserRepository } from "./modules/uesr/user.repository";

export const UserRep = new UserRepository();

export const GroupRep = new GroupRepository();

export const ExpenseRep = new ExpenseRepository();