import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import IconPrimary from "../../atoms/Icon";
interface Props {
  coin: {
    name?: string;
    price?: number;
    symbol?: string;
    amount?: number;
    change?: string;
    icon?: string;
    state?:string;
  };
}
const PaymentSuccess = (props: Props) => {
  const handleClick=()=>{
  }
  const handleGo=()=>{
  }
  return (
    <Grid container>
      <Grid item>
        <IconPrimary iconurl="successIcon"></IconPrimary>
      </Grid>
      <Grid item>
        <Typography>{props.coin.amount}</Typography>
        <Typography>{props.coin.symbol}</Typography>{" "}
      </Grid>
      <Grid item>
        <Typography>
        {props.coin.state} is completed, please check your balance in your crypto wallet
        </Typography>
      </Grid>
      <Grid item>
        <Button onClick={handleClick}>{props.coin.state} Crypto</Button>
        <Button onClick={handleGo}>Go to USD Coin</Button>
      </Grid>
    </Grid>
  );
}

export default PaymentSuccess;