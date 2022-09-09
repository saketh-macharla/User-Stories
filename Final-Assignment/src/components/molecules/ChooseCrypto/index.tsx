import { Box } from '@mui/material';
import React from 'react'
import IconPrimary from '../../atoms/Icon';

interface Props{
    coins   : {
        id:number,
        image: string;
        name: string;
        value:number;
      }[];
}
const ChooseCrypto = (props:Props) => {
  const handleCoinClick=()=>{
  }
  const allCards=props.coins.map((coin)=>(
    <Box onClick={handleCoinClick}>
      <IconPrimary iconurl={coin.image}></IconPrimary>
      {coin.name}
      ${coin.value}
    </Box>
  ))
  return (
    <div>map and display all available coins</div>
  )
}

export default ChooseCrypto