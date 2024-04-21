import React from "react";
import { Button, TextField } from "@mui/material";
import "./search-component.css";

interface Props {
  initialValue: string;
  handleSubmit: (name: string) => void;
}
export const Search: React.FC<Props> = (props) => {
  const { initialValue, handleSubmit } = props;
  const [searchValue, setSearchValue] = React.useState<string>(initialValue);

  return (
    <div className="search-component">
      <TextField
        id="outlined-basic"
        label="Organización"
        variant="outlined"
        size="small"
        defaultValue={initialValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearchValue(event.target.value);
        }}
      />
      <Button
        variant="outlined"
        size="medium"
        onClick={() => {
          handleSubmit(searchValue);
        }}
      >
        Buscar
      </Button>
    </div>
  );
};
