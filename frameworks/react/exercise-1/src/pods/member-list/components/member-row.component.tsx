import React from "react";
import { Member } from "../member-list.vm";

interface Props {
  member: Member;
}

export const MemberRow: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <>
      <img src={member.avatarUrl} alt="" />
      <div>{member.id}</div>
      <div>
        <div>{member.login}</div>
      </div>
    </>
  );
};
