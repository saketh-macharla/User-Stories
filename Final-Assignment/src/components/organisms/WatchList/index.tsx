import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ButtonIcon from '../../atoms/ButtonIcon'
import IconPrimary from '../../atoms/Icon'
import CoinCardSecondary from '../../molecules/CoinCardSecondary'
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
const WatchList = (props:Props) => {
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
   <Grid container>
        <Grid item>
            <Typography>WatchList</Typography>
            <ButtonIcon text='Discover assets' endIcon='arrowright'></ButtonIcon>
            <ButtonIcon text='Edit' endIcon='pen'></ButtonIcon>
            <IconPrimary iconurl='windows'></IconPrimary>
            <IconPrimary iconurl='more'></IconPrimary>
        </Grid>
        <Grid item>
            {coinsList}
        </Grid>
   </Grid>
  )
}

export default WatchList