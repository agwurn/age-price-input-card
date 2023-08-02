import React, { useEffect, useState } from 'react'

const NumberSelect = (props) => {

    const { id, errorMsg, localAgeInterval, handleSetAgeInterval } = props
    // const [ ageBorder, setAgeBorder ] = useState([0, 20])
    let ageBorder = [0, 20]

    const renderProps = () => {

        if ( id ==="left" && localAgeInterval[1] ) {
            ageBorder = [0, localAgeInterval[1] - 1]
        } else if ( id === "right" && localAgeInterval[0] ){
            ageBorder = [localAgeInterval[0] + 1, 20]
        }
        console.log(id, ageBorder)

        const options = [<option key={"default"} 
            value=""
            disabled={true}
        >請選擇</option>];

        for (let i = ageBorder[0]; i <= ageBorder[1]; i++) {
         
            let disabled = false
            if(localAgeInterval.indexOf(i) !== -1){
                disabled = true
            }

            options.push(
                <option key={i} 
                        value={i}
                        disabled={disabled}
                        
                >{i}</option>
            )
        }
        return options
    }

    const handleSelect = (e) => {
        const selected = Number(e.target.value)
        handleSetAgeInterval(selected)
    }

  return (
    <select className={`${errorMsg?"border border-red-500":""} w-1/2 text-xs focus:outline-none focus:border focus:border-blue-300`} 
            onChange={handleSelect}
            defaultValue={""}>
        {renderProps()}
    </select>
  )
}

export default NumberSelect