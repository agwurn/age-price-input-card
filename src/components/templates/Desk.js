import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import Card from '../organisms/Card'
import AddCardBtn from '../atoms/AddCardBtn'
import { getAgeState } from '../../libs/ageCheck'

const Desk = () => {

  const [ cards, setCards ] = useState([])
  const [ ageState, setAgeState ] = useState({overlap:[], notInclude:[[0,20]]})

  const handleAddCard = () => {
    const newCard = {
      id: uuidv4(),
      ageInterval: ["", ""],
      price: ""
    }
    setCards([...cards, newCard])
  }

  const handleDeleteCard = (id) => {
    let tempCards = [...cards].filter(c => c.id !== id)
    setCards(tempCards)
  }

  const changeGlobalAgeInterval = (id, newAgeInterval) => {
    const tempCards = [...cards]
    tempCards.forEach(c => {
      if (c.id === id) {
        c.ageInterval = newAgeInterval
      }
    })
    setCards(tempCards)
  }

  useEffect(() => {
    handleAddCard()
  },[])
 
  useEffect(() => {
    let ageList = getAgeList()
    let noEmpty = checkNoEmpty(ageList)
    if(noEmpty) {
      let tempAgeState = getAgeState(ageList)
      setAgeState(tempAgeState)
    }
  },[cards])

  const getAgeList = () => {
    let ageList = []
    cards.forEach(c => {
      if (c.ageInterval){
        ageList.push(c.ageInterval)
      }
    })
    return ageList
  }

  const checkNoEmpty = (ageList) => {
    if(!ageList || !ageList[0]) {
      return false
    }
    for ( let interval of ageList ) {
      for (let i in interval) {
        if (interval[i] === "") {
          return false
        }
      }
    }
    return true
  }

  return (
    <div className='m-auto font-mono w-[40em]'>        
        <div className='my-20 border border-dashed border-gray-400'>
          {cards.map((card, ind) => (
            <Card key={card.id}
                  id={card.id}
                  num={ind + 1}
                  ageInterval={card.ageInterval} 
                  handleDeleteCard={handleDeleteCard}
                  changeGlobalAgeInterval={changeGlobalAgeInterval}
                  ageState={ageState}
                  />                  
          ))}
          <AddCardBtn ageState={ageState} handleAddCard={handleAddCard}/>
        </div>
    </div>
  )
}

export default Desk