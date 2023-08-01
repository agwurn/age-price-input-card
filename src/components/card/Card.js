import React from 'react'
import InputFieldAge from '../inputField/InputFieldAge';
import InputFieldPrice from '../inputField/InputFieldPrice';

const Card = (props) => {

    let { num } = props;

  return (
    <div className=''>
        <div className='text-sm text-slate-700'>價格設定 - {num}</div>
        <div className='flex gap-8'>
            <InputFieldAge/>
            <InputFieldPrice/>
        </div>
    </div>
  )
}

export default Card