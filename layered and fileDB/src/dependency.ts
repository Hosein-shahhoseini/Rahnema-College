import { ExpenseRepository } from "./modules/expenses/expense-repository";
import { GroupRepository } from "./modules/group/group-repository";
import { UserRepository } from "./modules/uesr/user.repository";
import { FileDatabase } from './fileDatabase';
import { User } from "./modules/uesr/dto/user.dto";
import { Group } from "./modules/group/dto/group.dto";
import { Expense } from "./modules/expenses/dto/expense.dto";

export const UserRep = new UserRepository();

export const GroupRep = new GroupRepository();

export const ExpenseRep = new ExpenseRepository();

export const UserFileDB = new FileDatabase<User>('./UserDB.json');
export const GroupFileDB = new FileDatabase<Group>('./GroupDB.json');
export const ExpenseFileDB = new FileDatabase<Expense>('./ExpenseDB.json');
