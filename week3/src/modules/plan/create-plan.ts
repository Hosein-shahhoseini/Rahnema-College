import { plans } from "../../routes/plan.route";
import { user } from "../../routes/users.route";
import { HttpError } from "../../utility/my-errors";
import { CreatePlanDto } from "./dto/create-plan-dto";

export const createPaln = (dto: CreatePlanDto ,loggedInUser : user) => {
    const plan = {
        id: plans.length + 1,
        title : dto.title ,
        userId : "1",
        description: dto.description || "",
        deadline: dto.deadline,
        programs : [],
    };

    if(dto.deadline.getTime() < new Date().getTime()){
        throw new HttpError(401 ,"you should not use a deadline in the past")
    }

    if (loggedInUser.role !== "Admin") {
        throw new HttpError(403 , "you are not authorized");
    }
    plans.push(plan);
};
