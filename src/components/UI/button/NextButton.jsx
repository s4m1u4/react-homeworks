import React from 'react';
import {Button} from "@mui/material";

const NextButton = ({children, props}) => {
  return (
    <Button type="submit" variant="contained" {...props}>{children}</Button>
  );
};

export default NextButton;
