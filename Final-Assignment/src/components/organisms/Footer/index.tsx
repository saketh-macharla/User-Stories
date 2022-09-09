import { Button, Grid } from '@mui/material'
import React from 'react'
import ButtonIcon from '../../atoms/ButtonIcon'

const Footer  = () => {
  return (
    <Grid container direction='row'>
        <Grid item>
            DashBoard
        </Grid>
        <Grid item>
            careers
        </Grid>
        <Grid item>
            Legal&Privacy
        </Grid>
        <Grid item>
        © 2021 Minet
        </Grid>
        <Grid item>
           <ButtonIcon endIcon='arrowdown' text='English'></ButtonIcon>
        </Grid>
        <Grid item>
            <Button>Need Help</Button>
        </Grid>
        
    </Grid>
  )
}

export default Footer