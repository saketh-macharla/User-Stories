import Grid from '@mui/material/Grid'
import React from 'react'
import GraphPrimary from '../../atoms/GraphPrimary';
import IconPrimary from '../../atoms/Icon'

interface Props{
    coin:{
        name:string;
        icon:string;
        value:number;
        time:number;
    }
}
const CoinCard = (props:Props) => {
  return (
    <Grid container direction='row'>
        <Grid item>
            <IconPrimary iconurl={props.coin.icon}></IconPrimary>
        </Grid>
        <Grid item>
            <Grid container>
                <Grid item>
                    {props.coin.name}
                </Grid>
                <Grid item>
                    ${props.coin.value}
                </Grid>
                <Grid item>
                    {props.coin.time}h
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <GraphPrimary value={props.coin.value}></GraphPrimary>
        </Grid>
    </Grid>
  )
}

export default CoinCard