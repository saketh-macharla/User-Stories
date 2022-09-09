import React from 'react'
interface Props{
    value:number;
}
const GraphPrimary = (props:Props) => {
  return (
    <div>{props.value}
    {/* mui graphs */}
    </div>
  )
}

export default GraphPrimary