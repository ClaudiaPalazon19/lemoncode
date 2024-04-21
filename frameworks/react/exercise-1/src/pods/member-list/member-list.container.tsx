import React from "react";
import { Member } from "./member-list.vm";
import { MemberList } from "./member-list.component";
import { getMembers, getTotalMembers } from "./member-list.repository";
import { PaginationContainer } from "../pagination/pagination-container";

interface Props {
  org: string;
}

export const MemberListContainer: React.FC<Props> = (props) => {
  const { org } = props;
  const [page, setPage] = React.useState<number>(0);
  const [totalMembers, setTotalMembers] = React.useState<number>(0);
  const [members, setMembers] = React.useState<Member[]>([]);

  React.useEffect(() => {
    setPage(1);
    getTotalMembers(org).then(setTotalMembers);
    getMembers(org, page).then(setMembers);
  }, [org]);

  const handleChangePage = (event, page: number) => {
    setPage(page);
    getMembers(org, page).then(setMembers);
  };

  return (
    <>
      {members ? (
        <>
          <MemberList members={members} />
          <PaginationContainer
            total={totalMembers}
            handleChangePage={handleChangePage}
            page={page}
          />
        </>
      ) : (
        <p>Sin resultados en la búsqueda</p>
      )}
    </>
  );
};
