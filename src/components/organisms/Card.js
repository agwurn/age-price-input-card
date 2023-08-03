import React, { useEffect, useState } from 'react'
import InputFieldAge from '../molecules/InputFieldAge';
import InputFieldPrice from '../molecules/InputFieldPrice';
import DeleteCardBtn from '../atoms/DeleteCardBtn';
import HorizonalLine from '../atoms/HorizonalLine'

const Card = (props) => {

    let { id,
          num, 
          handleDeleteCard, 
          changeGlobalAgeInterval, 
          ageState } = props;

    const [ cardAgeInterval, setCardAgeInterval ] = useState()

    const handleSetCardAgeInterval = (interval) => {
      setCardAgeInterval(interval)
    }

    useEffect(() => {
      changeGlobalAgeInterval(id, cardAgeInterval)
    },[cardAgeInterval])

    const handleDelete = () => {
      handleDeleteCard(id)
    }

  return (
    <div className='p-4' data-testid={`card-${num}`}>
      <HorizonalLine num={num}/>
      <div className='flex items-center'>
        <div className='text-sm text-slate-700'>價格設定 - {num}</div>
        <DeleteCardBtn num={num} handleDelete={handleDelete}/>
      </div>
      <div className='flex gap-8 my-2'>
          <InputFieldAge num={num}
                         ageState={ageState}
                         handleSetCardAgeInterval={handleSetCardAgeInterval}
          />
          <InputFieldPrice/>
      </div>
    </div>
  )
}

export default Card