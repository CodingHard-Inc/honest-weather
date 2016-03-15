import React from 'react'

const Temperature = ({temp, unit}) => {
  return (
    <div>
      <h1 className="temp">{Math.round(temp)}<small>{unit}</small></h1>
    </div>
  )
}

export default Temperature