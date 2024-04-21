import { Member } from "./api.model";

export const getTotalMembers = (org: string): Promise<Member[]> => {
  return fetch(`https://api.github.com/orgs/${org}/members`).then((response) =>
    response.json()
  );
};

export const getMembersPaginated = (
  org: string,
  page: number
): Promise<Member[]> => {
  return fetch(
    `https://api.github.com/orgs/${org}/members?page=${page}&per_page=5`
  ).then((response) => response.json());
};
