import React, { useState } from 'react'
import './PriceSettingBoard.scss'
import { addComma, removeComma } from '../libs/addComma'

const CardAge = () => {

    return (
        <div className='card-age'>
            <h3>年齡</h3>
            <div className='input-age'>
                <input type="number" />
                <div>~</div>
                <input type="number" />
            </div>
            <div className='warning'>年齡區間不可重疊</div>
        </div>
    )
}

const CardPrice = () => {
    const [ price, setPrice ] = useState()
    const [ priceWithComma, setPriceWithComma ] = useState()

    const handleChangePrice = (e) => {
        if (/[\d.]/.test(e.target.value)){
            console.log(e.target.value)
        }
        let newPrice = removeComma(e.target.value)
        setPrice(newPrice)
        setPriceWithComma(addComma(newPrice))
    }
    return (
        <div className='card'>
            <h3>入住費用(每人每晚)</h3>
                <div className='input-price'>
                    <div className='title-twd'>TWD</div>
                    <input type="text" value={priceWithComma} onChange={handleChangePrice} placeholder={'請輸入費用'}/>
                </div>
                <div className='warning'>不可以為空白</div>
            <div>輸入0表示免費</div>
        </div>
    )
}

const PriceSettingBoard = () => {
  return (
    <div className='price-setting-board'>
        <h2>價格設定</h2>
        <div className='inputs'>
            {/* <CardAge/> */}
            <CardPrice/>
        </div>
        {/* <div>X移除</div> */}
    </div>
  )
}

export default PriceSettingBoard