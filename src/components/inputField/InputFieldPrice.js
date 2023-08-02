import React, { useState } from 'react'
import PriceInput from './PriceInput'
import Title from './Title'
import ErrorMsg from './ErrorMsg'

const InputFieldPrice = () => {

  const [ errorMsg, setErrorMsg ] = useState("")

  const handleSetErrorMsg = (msg) => {
    setErrorMsg(msg)
  }
    
  return (
    <div className='w-full'>
        <Title>入住費用(每人每晚)</Title>
        <div className='h-8 flex border'>
            <div className='w-8 bg-gray-200 text-center leading-8 text-xs text-gray-500'>TWD</div>
            <PriceInput errorMsg={errorMsg} handleSetErrorMsg={handleSetErrorMsg}/>
        </div>
        <ErrorMsg>{errorMsg}</ErrorMsg>
        <p className='text-end text-xs text-gray-400 my-1'>輸入0表示免費</p>
    </div>
  )
}

export default InputFieldPrice