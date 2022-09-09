import Grid from "@mui/material/Grid";
import React from "react";
import IconPrimary from "../../atoms/Icon";
interface Props {
  coin: {
    id?: number;
    icon?: string;
    symbol?: string;
    name?: string;
    price?: number;
    change?: number;
    MarketCap?: number;
    subtext?: string;
  };
}
const CoinCardSecondary = (props: Props) => {
  return (
    <Grid container direction="row">
      <Grid item>
        <IconPrimary iconurl={props.coin.icon}></IconPrimary>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item>{props.coin.name}</Grid>
          <Grid item>{props.coin.subtext}</Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid item>${props.coin.price}</Grid>
        <Grid item>{props.coin.change}%</Grid>{" "}
      </Grid>
    </Grid>
  );
}

export default CoinCardSecondary;