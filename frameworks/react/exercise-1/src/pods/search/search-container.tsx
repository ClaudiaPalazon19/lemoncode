import React from "react";
import { Search } from "./search-component";

interface Props {
  initialValue: string;
  handleSubmit: (name: string) => void;
}

export const SearchContainer: React.FC<Props> = (props) => {
  const { initialValue, handleSubmit } = props;

  return <Search initialValue={initialValue} handleSubmit={handleSubmit} />;
};
