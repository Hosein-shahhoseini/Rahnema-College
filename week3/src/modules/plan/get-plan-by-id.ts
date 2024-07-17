import { plan, plans } from "../../routes/plan.route";
import { HttpError } from "../../utility/my-errors";

export const getPalnById = (id: number): plan => {
    const plan = plans.find((x) => x.id = id);

    if (plan === undefined) {
        throw new HttpError(400 , "Plan not found");
    }
    return plan;
}