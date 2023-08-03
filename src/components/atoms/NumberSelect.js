import React, { useEffect, useState } from 'react'

const NumberSelect = (props) => {

    const { errorMsg, selectValue, handleSetSelect } = props

    const handleSelect = (e) => {
        const selected = Number(e.target.value)
        handleSetSelect(selected)
    }

  return (
    <select className={`${errorMsg?"border border-red-500":""} w-1/2 text-xs focus:outline-none focus:border focus:border-blue-300`} 
            onChange={handleSelect}
            value={selectValue}
    >   
        <option disabled={true} value={""}>請選擇</option>
        {
            Array(21).fill(0).map((_, index) => {
                let isDisabled = false;
                if (index === selectValue) {
                    isDisabled = true
                }
                return <option key={index}
                               value={index}
                               disabled={isDisabled}
                        >{index}</option>
            })
        }
    </select>
  )
}

export default NumberSelect