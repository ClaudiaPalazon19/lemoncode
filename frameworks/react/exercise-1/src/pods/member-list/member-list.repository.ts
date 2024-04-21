import * as api from "./api/api";
import { mapMemberListToVM, mapTotalMembers } from "./member-list.mappers";
import * as vm from "./member-list.vm";

export const getMembers = (org: string, page: number): Promise<vm.Member[]> => {
  return api.getMembersPaginated(org, page).then(mapMemberListToVM);
};

export const getTotalMembers = (org: string): Promise<number> => {
  return api.getTotalMembers(org).then(mapTotalMembers);
};
