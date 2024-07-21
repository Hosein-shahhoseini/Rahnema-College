import { ForbiddenError, HttpError, notFoundError } from "../../utility/my-errors";
import { CreateProgramDto } from "./dto/create-program.dto";
import { user } from "../../routes/users.route";
import { plan, plans } from "../../routes/plan.route";
import { program } from '../../routes/program.route';

export const creatProgram = (dto : CreateProgramDto , user : user) => {
    const plan = plans.find((x) => x.id = dto.planId);
    if(plan === undefined){
        throw new notFoundError();
    }

    if(canCreateProgram(user , plan)){
        plan.programs.push({
            id : plan.programs.length + 1 ,
            title : dto.title ,
            description : dto.description || "",
            userId : user.id,
            planId : plan.id,
        });
    }
    else{
        throw new HttpError(400 , "program is not valid");
    }
};


export const canCreateProgram = (user : user , plan : plan)  => {
    if(user.role !== "Representative"){
        throw new ForbiddenError();
    }
    const program = plan.programs.find((x) => x.userId === user.id);
    if(program){
        return false;
    }
    if(new Date().getTime()  < plan.deadline.getTime()){
        return false;
    }
    return true;
}
