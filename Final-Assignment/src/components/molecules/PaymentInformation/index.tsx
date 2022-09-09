import { Button, Grid, Step, Stepper, Typography } from '@mui/material'
import React from 'react'
interface Props{
    coin:{
        name:string;
        price:number;
        symbol:string;
        state:string;
        amount:number;
        transactionfee:number;
    }
}
const PaymentInformation = (props:Props) => {
    const handleClick=()=>{
    }
  return (
    <div>
        <Typography>You are {props.coin.state}</Typography>
        <Typography>{props.coin.amount} {props.coin.symbol}</Typography>
        <Typography>1{props.coin.symbol} = ${props.coin.price}</Typography>

        <Stepper>
            {/* each step with icon */}
            <Step>payment method</Step>
            <Step>deliver fee</Step>
            <Step>deposit to method</Step>
        </Stepper>

        <Grid container>
            <Grid item>
                <Typography>{props.coin.amount} {props.coin.symbol}..................${props.coin.price}</Typography>
            </Grid>
            <Grid item>
                <Typography>Transaction Fee..................${props.coin.transactionfee}</Typography>
            </Grid>
            <Grid item>
                <Typography>Total..................${props.coin.transactionfee + props.coin.price}</Typography>
            </Grid>
            <Grid item>
                <Button onClick={handleClick}>{props.coin.state==="buying"?"Buy":"Sell"} Now</Button>
            </Grid>
        </Grid>
        

    </div>
  )
}

export default PaymentInformation