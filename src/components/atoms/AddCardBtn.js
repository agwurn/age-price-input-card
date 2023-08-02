import React from 'react'

const addCardBtn = ({handleAddCard}) => {
  return (
    <button className='text-xs text-teal-600 m-4' 
        onClick={handleAddCard}
    >+ 新增價格設定
    </button>
  )
}

export default addCardBtn