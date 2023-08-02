import React from 'react'
import Xmark from '../atoms/Xmark'

const DeleteCardBtn = (props) => {

    const { num, handleDelete } = props

  return (
    num !== 1 
    && 
    <button className='ml-auto flex items-center text-xs text-red-400' 
            onClick={handleDelete}
    >
      <Xmark/>移除
    </button>
  )
}

export default DeleteCardBtn