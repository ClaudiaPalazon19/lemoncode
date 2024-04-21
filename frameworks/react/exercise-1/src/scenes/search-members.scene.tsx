import React from "react";
import { AppLayout } from "@/layouts";
import { MemberListContainer } from "@/pods/member-list";
import { SearchContainer } from "@/pods/search";

export const SearchMembersScene: React.FC = () => {
  const [organization, setOrganization] = React.useState<string>("lemoncode");

  const handleOrganization = (newOrg: string) => {
    setOrganization(newOrg);
  };

  return (
    <AppLayout>
      <SearchContainer
        initialValue={organization}
        handleSubmit={handleOrganization}
      />
      <MemberListContainer org={organization} />
    </AppLayout>
  );
};
