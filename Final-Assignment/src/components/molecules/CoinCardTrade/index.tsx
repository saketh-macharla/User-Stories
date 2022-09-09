import { Card, Grid } from '@mui/material';
import React from 'react'
import IconPrimary from '../../atoms/Icon';

interface Props{
  coin   : {
      id:number,
      icon: string;
      symbol: string;
      name: string;
      price:number;
      change: number;
      MarketCap: number;

    };
}
const CoinCardTrade = (props:Props) => {
  return (
   <Card>
     <Grid container direction='column'>
        <Grid item>
            <IconPrimary iconurl={props.coin.icon}></IconPrimary>
        </Grid>
        <Grid item>
            <Grid container>
                <Grid item>
                    {props.coin.name}
                </Grid>
                <Grid item>
                    ${props.coin.symbol}
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
          ${props.coin.price}
        </Grid>
        <Grid item>
          {props.coin.change}%
        </Grid>
        <Grid item>
          ${props.coin.MarketCap}T
        </Grid>
        <Grid item>
          {/* star icon */}
        </Grid>
    </Grid>
   </Card>
  )
}

export default CoinCardTrade