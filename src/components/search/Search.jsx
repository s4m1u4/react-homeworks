import React from 'react';
import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {searchParticipantsByNameAndIdAction, setSearchValueAction} from "../../actions/participantsActions";

const Search = () => {
  const dispatch = useDispatch();

  const searchParticipantByNameAndId = (event) => {
    dispatch(setSearchValueAction(event.target.value));
    dispatch(searchParticipantsByNameAndIdAction());
  };

  return (
    <TextField
      fullWidth
      size="small"
      type="search"
      sx={{backgroundColor: 'white'}}
      label="Enter participant name..."
      onChange={searchParticipantByNameAndId}
    />
  );
};

export default Search;
