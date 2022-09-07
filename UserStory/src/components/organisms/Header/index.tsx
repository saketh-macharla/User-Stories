import { Grid } from "@mui/material";
import React from "react";
import Icons from "../../atoms/Icons";
import Logos from "../../atoms/Logos";

const Header = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <Logos path="sa" />
        </Grid>
        <Grid item>
          <Icons name="" />
        </Grid>
        <Grid item>{/* Icon with Text */}</Grid>
        <Grid item>{/* Typography */}</Grid>
        <Grid item>{/* Typography */}</Grid>
        <Grid item>{/* Icon with Text */}</Grid>
      </Grid>
    </div>
  );
};
export default Header;
