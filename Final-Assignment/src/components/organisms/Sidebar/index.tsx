import Grid from "@mui/material/Grid";
import React from "react";
import IconPrimary from "../../atoms/Icon";

const SideBar = () => {
  return (
    <Grid container alignItems="center" direction="column">
      <Grid item>
        <IconPrimary iconurl=""></IconPrimary>
      </Grid>
      <Grid item>
        <IconPrimary iconurl=""></IconPrimary>
      </Grid>
      <Grid item>
        <IconPrimary iconurl=""></IconPrimary>
      </Grid>
      <Grid item>
        <IconPrimary iconurl=""></IconPrimary>
      </Grid>
      <Grid item>
        <IconPrimary iconurl=""></IconPrimary>
      </Grid>
    </Grid>
  );
}

export default SideBar;