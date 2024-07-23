import { Group } from "./dto/group.dto";

export const createGroup = (dto : Group , groups : Group[]) => {
    const group = groups.some((x) => x.group_id = dto.group_id);
    if(!group){
        groups.push(dto);
    }
}