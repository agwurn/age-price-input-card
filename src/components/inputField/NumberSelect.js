import React from 'react'

const NumberSelect = (props) => {

    const { errorMsg, ageList, handleSetAgeList } = props

    const renderProps = () => {

        const options = [<option key={"default"} 
            value=""
            disabled={true}
        >請選擇</option>];

        for (let i = 0; i <= 20; i++) {

            let disabled = false
            if(ageList.indexOf(i) !== -1){
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
        handleSetAgeList(selected)
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