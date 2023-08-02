import React, { useEffect, useState } from 'react'
import { addComma, removeComma } from '../../libs/addComma'

const PriceInput = (props) => {

  const { errorMsg, handleSetErrorMsg } = props

  const [ input, setInput] = useState('')

  const handleInput = (e) => {
    
    const i = removeComma(e.target.value)
    const onlyNumsOrDot = /^[0-9.]*$/.test(i.toString())
    const onlyOneDot = i.toString().indexOf('.') === i.lastIndexOf('.')

    if(!onlyNumsOrDot || !onlyOneDot){
      return
    }

    let iMod = addComma(i)

    
    if (iMod.length > 1 && iMod[0] === "0") {
      iMod = iMod.slice(1)
    }

    if (iMod[0] === '.'){
      iMod = "0" + iMod
    }
    
    setInput(iMod)
  }

  useEffect(() => {
    inputValidation()
  },[input])

  const inputValidation = () => {
      if (!input) {
        handleSetErrorMsg("不可以為空白")
      } else {
        handleSetErrorMsg("")
      }
  }


  return (
    <input className={`${errorMsg?"border border-red-500":""} w-full text-xs text-center outline-none placeholder:text-xs placeholder:text-gray-300 focus:border focus:border-blue-300`}
           placeholder='請輸入費用'
           value={input}
           onChange={handleInput}/>
  )
}

export default PriceInput