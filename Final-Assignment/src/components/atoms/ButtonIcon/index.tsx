import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react'

interface Props{
    text:string;
    startIcon?:string;
    endIcon?:string;
}
const ButtonIcon = (props:Props) => {
  return (
    <div>
        <Button
        // variant={props.variant}
       
      >
        {props.startIcon}
        <Typography>{props.text}</Typography>
        {props.endIcon}
      </Button>
    </div>
  )
}

export default ButtonIcon