import { Group } from "./dto/group.dto";
import { GroupRepository } from "./group-repository";
import { GroupFileDB } from './../../dependency';
import { FileDatabase } from "../../fileDatabase";

export const createGroup = (dto : Group , groupRepo : GroupRepository , file : FileDatabase<Group>) => {
    const group = groupRepo.groups.some((x) => x.group_id = dto.group_id);
    if(!group){
        groupRepo.Create(dto);
        file.create(dto);
    }
}