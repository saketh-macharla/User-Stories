import { Typography } from '@mui/material';
import React from 'react'
import CoinCard from '../CoinCardPrimary';
import CoinCardSecondary from '../CoinCardSecondary';
interface Props{
    transactions:{
        name:string;
        price:number;
        symbol:string;
        state:string;
        amount:number;
        date:string;
        transactionfee:number;
    }[];
}
const RecentTransactions = (props:Props) => {
    const transactions=props.transactions.map((transaction,index)=>(
        <><Typography>{transaction.date}</Typography>
        <CoinCardSecondary coin={{
            }} ></CoinCardSecondary>
        </>
    ))
  return (
    <div>
        {transactions}
    </div>
  )
}

export default RecentTransactions