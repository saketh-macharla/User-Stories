import React from 'react'

interface LogosProps{
  path:string
}

const Logos = ({path}:LogosProps) => {
  return (
    <div>
      <img src={path}/>
    </div>
  )
}

export default Logos
