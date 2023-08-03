import React from 'react'

const HorizonalLine = ({num}) => {
  return (
    num > 1 &&
    <div className='h-[0.05rem] w-full my-2 bg-slate-200'></div>
  )
}

export default HorizonalLine