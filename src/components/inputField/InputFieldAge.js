import React, { useEffect, useState } from 'react'
import NumberSelect from './NumberSelect'
import Title from './Title'
import ErrorMsg from './ErrorMsg'

const InputFieldAge = () => {

    const [ errorMsg, setErrorMsg ] = useState("")
    const [ ageList, setAgeList ] = useState(["",""])

    const handleSetAgeListLeft = (val) => {
      const ageL = ageList
      setAgeList([val, ageL[1]])
    }
    const handleSetAgeListRight = (val) => {
      const ageL = ageList
      setAgeList([ageL[0], val])
    }
    
    useEffect(() => {
      // const sortedAgeList = ageList.sort()
      console.log(ageList)
    },[ageList])

  return (
    <div className='w-full'>
        <Title>年齡</Title>
        <div className='h-8 flex border'>
            <NumberSelect ageList={ageList} 
                          handleSetAgeList={handleSetAgeListLeft} 
                          errorMsg={errorMsg}
            />
            <div className='w-8 bg-gray-200 text-center leading-8 text-xs text-gray-500'>~</div>
            {/* <select/> */}
            <NumberSelect ageList={ageList} 
                          handleSetAgeList={handleSetAgeListRight} 
                          errorMsg={errorMsg}
            />
        </div>
        <ErrorMsg>{errorMsg}</ErrorMsg>
    </div>
  )
}

export default InputFieldAge