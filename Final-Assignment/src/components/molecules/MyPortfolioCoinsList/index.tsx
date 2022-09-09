import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import IconPrimary from "../../atoms/Icon";
import CoinCardSecondary from "../CoinCardSecondary";
interface Props {
  coins: {
    name?: string;
    price?: number;
    symbol?: string;
    amount?: number;
    change?: string;
    icon?: string;
  }[];
}
const MyPortfolioCoinsList = (props: Props) => {
  const handleClick=()=>{
  }
  const coinsList = props.coins.map((coin) => (
    <Box onClick={handleClick}>
      <CoinCardSecondary coin={{
              id: undefined,
              icon: undefined,
              symbol: undefined,
              name: undefined,
              price: undefined,
              change: undefined,
              MarketCap: undefined,
              subtext: undefined
          }}      // coin={coin}
      ></CoinCardSecondary>
    </Box>
  ));
  return (
    <div>
      <Grid container>
        <Grid item>
          <Typography>My Portfolio</Typography>
          <IconPrimary iconurl="refreshIcon"></IconPrimary>
          <IconPrimary iconurl="more"></IconPrimary>
        </Grid>
        <Grid item>{coinsList}</Grid>
        <Grid item>
          <Card>
            <Typography>Total Balance</Typography>
            <Typography>{/* ${}add all coins.prices */}</Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default MyPortfolioCoinsList;