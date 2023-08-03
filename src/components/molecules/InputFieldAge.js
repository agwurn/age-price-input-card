import React, { useEffect, useState } from 'react'
import NumberSelect from '../atoms/NumberSelect'
import InputTitle from '../atoms/InputTitle'
import ErrorMsg from '../atoms/ErrorMsg'

const InputFieldAge = (props) => {

    const { handleSetCardAgeInterval, ageState } = props

    const [ errorMsg, setErrorMsg ] = useState("")
    const [ leftSelect, setLeftSelect ] = useState("")
    const [ rightSelect, setRightSelect ] = useState("")
    const [ sortedSelect, setSortedSelect ] = useState(["",""])

    const handleSetLeftSelect = (val) => {
      setLeftSelect(val)
    }
    const handleSetRightSelect = (val) => {
      setRightSelect(val)
    }

    useEffect(() => {
      if(checkEmptyAndSetErrMsg()) {
        checkAndSwap()
      }
    },[leftSelect, rightSelect])

    useEffect(() => {
      handleSetCardAgeInterval(sortedSelect)
    },[sortedSelect])
    
    useEffect(() => {
      if(ageState) {
        console.log(checkOverlapped())
        if(checkOverlapped()) {
          setErrorMsg("年齡區間不可重疊")
        } else {
          setErrorMsg("")
        }
      }
    },[ageState])

    const checkEmptyAndSetErrMsg = () => {
      if(leftSelect === "" || rightSelect === "") {
        setErrorMsg("不可以為空白")
        return false
      } else {
        setErrorMsg("")
        return true
      }
    }

    const checkAndSwap = () => {
      if( !(leftSelect === "" || rightSelect === "")) {
        let tempL = leftSelect
        let tempR = rightSelect
        if (tempL >= tempR) {
          tempL = rightSelect
          tempR = leftSelect
          setLeftSelect(tempL)
          setRightSelect(tempR)
        }
        setSortedSelect([tempL, tempR])
      }
    }

    const checkOverlapped = () => {
      let overlapList = ageState.overlap
      console.log('---',ageState)
      for(let o of overlapList)
      {
        for(let i = o[0]; i <= o[o.length - 1]; i ++){
          if(rightSelect >= i && i >= leftSelect){
            return true
          }
        }
      }
      return false
    }

  return (
    <div className='w-full'>
        <InputTitle>年齡</InputTitle>
        <div className='h-8 flex border'>
            <NumberSelect id={"left"} 
                          selectValue={leftSelect}
                          handleSetSelect={handleSetLeftSelect}
                          errorMsg={errorMsg}
            />
            <div className='w-8 bg-gray-200 text-center leading-8 text-xs text-gray-500'>~</div>
            <NumberSelect id={"right"}
                          selectValue={rightSelect}
                          handleSetSelect={handleSetRightSelect}
                          errorMsg={errorMsg}
            />
        </div>
        <ErrorMsg>{errorMsg}</ErrorMsg>
    </div>
  )
}

export default InputFieldAge