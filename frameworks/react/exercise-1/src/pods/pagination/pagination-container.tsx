import { Pagination } from "@mui/material";
import React from "react";
import "./pagination-container.css";

interface Props {
  total: number;
  handleChangePage: (event, page: number) => void;
  page: number;
}

export const PaginationContainer: React.FC<Props> = (props) => {
  const { total, handleChangePage, page } = props;
  const itemsPerPage = 5;

  return (
    <div className={"pagination-container"}>
      <Pagination
        count={Math.ceil(total / itemsPerPage)}
        page={page}
        onChange={handleChangePage}
      />
    </div>
  );
};
