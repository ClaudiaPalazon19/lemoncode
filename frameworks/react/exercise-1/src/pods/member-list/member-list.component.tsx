import React from "react";
import { MemberListHeader, MemberRow } from "./components";
import { Member } from "./member-list.vm";
import "./member-list-component.css";

interface Props {
  members: Member[];
}

export const MemberList: React.FC<Props> = (props) => {
  const { members } = props;

  return (
    <div className="list-user-list-container">
      <MemberListHeader />
      {members.map((member) => (
        <MemberRow key={member.id} member={member} />
      ))}
    </div>
  );
};
