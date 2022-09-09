import { Grid, Typography } from "@mui/material";
import React from "react";
import GraphPrimary from "../../atoms/GraphPrimary";
import IconPrimary from "../../atoms/Icon";
interface Props {
    total:number;
  coin: {
    id: number;
    icon: string;
    symbol: string;
    name: string;
    price: number;
    change: number;
    MarketCap: number;
    subtext: string;
  };
}
const MyPortfolio = (props: Props) => {
  return (
    <Grid container>
      <Grid item>
        <Grid item xs={3}>
          <Grid item>
            <Typography>Total investment</Typography>
            <IconPrimary iconurl="arrowicon"></IconPrimary>
            {props.coin.change}%
          </Grid>
          <Grid item>${props.total}</Grid>
        </Grid>

        <Grid item xs={3}>
          <Grid item>
            <Typography>Total investment</Typography>
            <IconPrimary iconurl="arrowicon"></IconPrimary>
            {props.coin.change}%
          </Grid>
          <Grid item>${props.coin.price}</Grid>
        </Grid>

        <Grid item xs={3}>
          {/* static coin history tab */}
        </Grid>
        </Grid>

        <Grid item>
          <GraphPrimary value={props.coin.price}></GraphPrimary>
        </Grid>
    </Grid>
  );
}

export default MyPortfolio;