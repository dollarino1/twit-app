import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

export const Home: FC = () => {
  return <Box>
    Home PAGE
    <Button variant={'outlined'}>
      <Link to={'/auth/signup'}>GO TO REG PAGE</Link>
    </Button>
    <Button variant={'outlined'}>
      <Link to={'/auth/login'}>GO TO LOGIN PAGE</Link>
    </Button>
  </Box>
}