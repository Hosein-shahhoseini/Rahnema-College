import { Group } from "./dto/group.dto";
import { groups } from './../../routes/group.routes';

export const createGroup = (dto : Group , groups: Group[]) => {
    const myGroup = groups.find((x) => x.group_id = dto.group_id);
    if(myGroup === undefined){
        groups.push(dto);
    }
};