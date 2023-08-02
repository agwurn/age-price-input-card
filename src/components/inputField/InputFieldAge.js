import React, { useEffect, useState } from 'react'
import NumberSelect from './NumberSelect'
import Title from './Title'
import ErrorMsg from './ErrorMsg'

const InputFieldAge = (props) => {

    const {id, 
           handleSelectAge, 
           ageState } = props

    const [ errorMsg, setErrorMsg ] = useState("不可以為空白")
    const [ localAgeInterval, setLocalAgeInterval ] = useState(["",""])

    const handleSetAgeIntervalLeft = (val) => {
      const ageL = localAgeInterval
      setLocalAgeInterval([val, ageL[1]])
      handleSelectAge(id, 0, val)
    }
    const handleSetAgeIntervalRight = (val) => {
      const ageL = localAgeInterval
      setLocalAgeInterval([ageL[0], val])
      handleSelectAge(id, 1, val)
    }

    const checkOverlapped = () => {
      let overlapList = ageState.overlap
      for(let o of overlapList)
      {
        for(let i = localAgeInterval[0]; i <= localAgeInterval[1]; i ++){
          console.log(o[0], i, o[1])
          if(o[0] <= i && i <= o[1]){
            console.log('!!2')
            return true
          }
        }
      }
      return false
    }
    
    useEffect(() => {
      console.log('------',localAgeInterval)
      let tempErrorMsg = ""
      if (!checkAgeSelected(localAgeInterval)){
        tempErrorMsg = "不可以為空白"
      } else if(checkOverlapped()) {
        console.log('!3')
        tempErrorMsg = "年齡區間不可重疊"
      }
      setErrorMsg(tempErrorMsg)

    },[localAgeInterval, ageState])

    const checkAgeSelected = (localAgeInterval) => {
      if(localAgeInterval[0] === "" || localAgeInterval[1] === "") {
        return false
      } else {
        return true
      }
    }

    // const checkAgeValid = (ageInterval) => {

    // }

  return (
    <div className='w-full'>
        <Title>年齡</Title>
        <div className='h-8 flex border'>
            <NumberSelect ageInterval={localAgeInterval} 
                          handleSetAgeInterval={handleSetAgeIntervalLeft} 
                          errorMsg={errorMsg}
            />
            <div className='w-8 bg-gray-200 text-center leading-8 text-xs text-gray-500'>~</div>
            {/* <select/> */}
            <NumberSelect ageInterval={localAgeInterval} 
                          handleSetAgeInterval={handleSetAgeIntervalRight} 
                          errorMsg={errorMsg}
            />
        </div>
        <ErrorMsg>{errorMsg}</ErrorMsg>
    </div>
  )
}

export default InputFieldAge