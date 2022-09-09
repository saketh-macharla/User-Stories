import { SignalCellularConnectedNoInternet0BarSharp } from '@mui/icons-material'
import Grid from '@mui/material/Grid'
import React from 'react'
import ButtonIcon from '../../atoms/ButtonIcon'
import CoinCardTrade from '../../molecules/CoinCardTrade'
import Header from '../../organisms/Header'
import SideBar from '../../organisms/Sidebar'
interface Props {
  coins: {
    name?: string;
    price?: number;
    symbol?: string;
    amount?: number;
    change?: string;
    icon?: string;
    state?:string;
  }[];
}
const TradePage = (props:Props) => {
  const coinsList=props.coins.map((coin)=>(
    <CoinCardTrade coin={{
          id: 0,
          icon: '',
          symbol: '',
          name: '',
          price: 0,
          change: 0,
          MarketCap: 0
      }}    // coin={coin}
    ></CoinCardTrade>
    
  ))
  return (
    <div>
     <Header></Header>
      {/* at top */}
      <SideBar></SideBar>
      {/* left side */}
      <Grid container>
        <Grid item>
          <SignalCellularConnectedNoInternet0BarSharp>search all assets</SignalCellularConnectedNoInternet0BarSharp>
          <ButtonIcon endIcon='arrowDown' text='24h'></ButtonIcon>
          <ButtonIcon endIcon='arrowDown' text='All assets'></ButtonIcon>
        </Grid>
        <Grid item>
          {/* name  price   change    MarketCap   Watch evenly spaced */}
        </Grid>
        <Grid item>
          {coinsList}
        </Grid>
      </Grid>
    </div>
  )
}

export default TradePage