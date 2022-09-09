import { Button, Card } from '@mui/material'
import React from 'react'
import IconPrimary from '../../atoms/Icon'
import Wallet from '../../molecules/Wallet';

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
const WalletPage = (props:Props) => {
  return (
    <div>
      <Card>
        <IconPrimary iconurl={props.coin.icon}></IconPrimary>
        {props.coin.name}
        <Button>Cash Deposit</Button>
        <Button>WithDrawal</Button>
      </Card>
      <Wallet coins={[]} coin={{
              name: undefined,
              price: undefined,
              symbol: undefined,
              amount: undefined,
              change: undefined,
              icon: undefined,
              balance: undefined,
              from: undefined
          }}></Wallet>
    </div>
  )
}

export default WalletPage;