import { Group } from "./dto/group.dto";

export class GroupRepository {
    public groups : Group[] = [];
    public Create(gruop : Group)
    {
        this.groups.push(gruop);
    }
}