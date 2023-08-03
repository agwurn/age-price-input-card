import React, { useEffect, useState } from 'react'

const AddCardBtn = ({ageState, handleAddCard}) => {

  const [ isAvail, setIsAvail ] = useState(true)

  useEffect(() => {
    if (ageState.notInclude) {
      setIsAvail(ageState.notInclude.length !== 0)
    }
  },[ageState])

  const checkAndAddCard = () => {
      handleAddCard()
  }

  return (
    <button className={`${isAvail?"text-teal-600":"text-gray-300"} text-xs m-4 transition`} 
        onClick={checkAndAddCard}
        disabled={!isAvail}
    >+ 新增價格設定
    </button>
  )
}

export default AddCardBtn