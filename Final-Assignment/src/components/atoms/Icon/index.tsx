import React from 'react'
interface Props{
    iconurl?:string;
}
const IconPrimary = (props:Props) => {
  return (
    <div>
        <img src={props.iconurl} alt='no img'></img>
    </div>
  )
}

export default IconPrimary