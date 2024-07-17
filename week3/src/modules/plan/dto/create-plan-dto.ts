import { z } from "zod";

export const createPlanDto = z.object({
    title : z.string().nonempty(),
    description : z.string().optional(),
    deadline : z.string().transform((str) => new Date),
});

export type CreatePlanDto = z.infer<typeof createPlanDto> ; 