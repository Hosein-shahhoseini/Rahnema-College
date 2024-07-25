import { Group } from "./dto/group.dto";
import { GroupRepository } from "./group-repository";

export const createGroup = (dto : Group , groupRepo : GroupRepository) => {
    const group = groupRepo.groups.some((x) => x.group_id = dto.group_id);
    if(!group){
        groupRepo.Create(dto);
    }
}