import * as am from "./api/api.model";
import * as vm from "./member-list.vm";

export const mapTotalMembers = (data: am.Member[]): number => {
  if (!data.length) return;
  return data.length;
};

export const mapMemberListToVM = (data: am.Member[]): vm.Member[] => {
  if (!data.length) return;
  return data.map((item) => mapMemberToVM(item));
};

const mapMemberToVM = (data: am.Member): vm.Member => ({
  id: data.id,
  login: data.login,
  avatarUrl: data.avatar_url,
});
