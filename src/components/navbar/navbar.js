import React from "react";
import { Grid, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Box m={0} p={4}>
        <Grid
          container
          spacing={0}
          direction={"row"}
          textAlign={"center"}
          alignContent={"center"}
          justify={"center"}
        >
          <Box m={2}>
            <Link to="/" style={{ textDecoration: "none", color: "wheat" }}>
              Home
            </Link>
          </Box>
          <Box m={2}>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "wheat" }}
            >
              About
            </Link>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default NavBar;
