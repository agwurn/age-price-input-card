import React from 'react'
import InputFieldAge from '../inputField/InputFieldAge';
import InputFieldPrice from '../inputField/InputFieldPrice';
import DeleteCardBtn from '../inputField/DeleteCardBtn';
import HorizonalLine from './HorizonalLine'

const Card = (props) => {

    let { id,
          num,
          ageInterval, 
          handleDeleteCard, 
          handleSelectAge, 
          ageState } = props;

    const handleDelete = () => {
      handleDeleteCard(id)
    }

  return (
    <div className='p-4'>
      <HorizonalLine num={num}/>
      <div className='flex items-center'>
        <div className='text-sm text-slate-700'>價格設定 - {num}</div>
        <DeleteCardBtn num={num} handleDelete={handleDelete}/>
      </div>
      <div className='flex gap-8 my-2'>
          <InputFieldAge id={id} 
                         ageInterval={ageInterval} 
                         handleSelectAge={handleSelectAge}
                         ageState={ageState}/>
          <InputFieldPrice/>
      </div>
    </div>
  )
}

export default Card