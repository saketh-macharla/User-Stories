import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react'
interface Props{
    dolaramount?:number;
    coinamount?:number;
    symbol?:string;
    value?:number;
    state?:string;
}
const AmountDetails = (props:Props) => {
    const handleClick=()=>{
    }
  return (
    <div>
        <Grid container>
            <Grid item>
                ${props.dolaramount}
                <Button onClick={handleClick}>{props.state} max</Button>
            </Grid>
            <Grid item>
                1{props.symbol}=${props.value}
            </Grid>
            <Grid item>
            {props.coinamount}
            {props.symbol}
            </Grid>
        </Grid>
    </div>
  )
}

export default AmountDetails