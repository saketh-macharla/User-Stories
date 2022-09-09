import { Button } from '@mui/material';
import React from 'react'
import IconPrimary from '../../atoms/Icon';
interface Props {
  coins: {
    id: number;
    name: string;
  }[];
}
const CoinsList = (props:Props) => {
  const handleClick=()=>{
  }
    const coinsList=props.coins.map((coin)=>(
        <Button onClick={handleClick}>{coin.name}</Button>
    ))
  return (
    <div>
        <IconPrimary iconurl='arrowLeft'></IconPrimary>
        {coinsList}
        <IconPrimary iconurl='arrowRight'></IconPrimary>
    </div>
  )
}

export default CoinsList