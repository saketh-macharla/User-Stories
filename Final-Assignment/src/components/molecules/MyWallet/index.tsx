import React from 'react'
import CoinCardSecondary from '../CoinCardSecondary';

interface Props{
    coins   : {
        id:number,
        image: string;
        name: string;
        value:number;
      }[];
}
const MyWallet = (props:Props) => {
  const coinsList=props.coins.map((coin)=>(
    <CoinCardSecondary coin={{
          id: undefined,
          icon: undefined,
          symbol: undefined,
          name: undefined,
          price: undefined,
          change: undefined,
          MarketCap: undefined,
          subtext: undefined
      }}    // coin={coin}
    ></CoinCardSecondary>
  ));
  return (
    <div>
        {coinsList}

    </div>
  )
}

export default MyWallet