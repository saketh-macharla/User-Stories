import { Grid, Typography } from '@mui/material'
import React from 'react'
import IconPrimary from '../../atoms/Icon';
interface Props {
    coins: {
      name?: string;
      price?: number;
      symbol?: string;
      amount?: number;
      change?: string;
      icon?: string;
      balance?:number;
    }[];
    coin: {
        name?: string;
        price?: number;
        symbol?: string;
        amount?: number;
        change?: string;
        icon?: string;
        balance?:number;
        from?:string;
      };
  }
const Wallet = (props:Props) => {
    const transactions=props.coins.map((transaction)=>
    <Grid container direction='column'>
        <Grid item>
            <Grid container>
                <Grid item>
                    {/* month */}
                </Grid>
                <Grid item>
                    {/* date */}
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <IconPrimary iconurl="success/failure/loading"></IconPrimary>
        </Grid>
        <Grid item>
            <Grid container>
                <Grid item>
                    {props.coin.name}
                </Grid>
                <Grid item>
                    {props.coin.from}
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Grid container>
                <Grid item>
                    {props.coin.change}{props.coin.symbol}
                </Grid>
                <Grid item>
                    ${props.coin.amount}
                </Grid>
            </Grid>
        </Grid>
        
    </Grid>)
  return (
    <div>
        <Grid container>
            <Grid item>
                <Typography>Total balance {props.coin.balance}{props.coin.symbol}${props.coin.price}</Typography>
            </Grid>
            <Grid item>
                {/* Mui asset search bar  */}
                <IconPrimary iconurl='more'></IconPrimary>
                {/* history dropdown */}
            </Grid>
            <Grid item>
                {transactions}
            </Grid>
        </Grid>
    </div>
  )
}

export default Wallet