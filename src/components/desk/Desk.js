import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import Card from '../card/Card'
import AddCardBtn from '../atoms/AddCardBtn'
import { getAgeState } from '../../libs/ageCheck'

const Desk = () => {

  const [ cards, setCards ] = useState([])
  const [ ageState, setAgeState ] = useState("")

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

  const handleSelectAge = (id, index, inputAge) => {
    const tempCards = [...cards]
    tempCards.forEach(c => {
      if (c.id === id) {
        c.ageInterval[index] = inputAge
      }
    })

    setCards(tempCards)
  }

  useEffect(() => {
    handleAddCard()
    ageValidation()
  },[])
 
  useEffect(() => {
    ageValidation()
  },[cards])

  const ageValidation = () => {
    // collecting age list
    let ageList = []
    cards.forEach(c => {
      let ageInterval = [...c.ageInterval]
      ageList.push(ageInterval.sort((a,b) => a - b))
    })

    // check if the list is all numbers
    if(ageList.every(l => {
      return l[0] !== "" && l[1] !== ""
    })) {
      // get the age state
      let tempAgeState = getAgeState(ageList)
      setAgeState(tempAgeState)
    }
  }


  const renderCards = (cards) => {
    return cards.map((card, ind) => (
            <Card key={card.id}
                  id={card.id}
                  num={ind + 1}
                  ageInterval={card.ageInterval} 
                  handleDeleteCard={handleDeleteCard}
                  handleSelectAge={handleSelectAge}
                  ageState={ageState}
                  />                  
          ))
    
  }

  return (
    <div className='m-auto font-mono w-[40em]'>        
        <div className='my-20 border border-dashed border-gray-400'>
          {renderCards(cards)}
        <AddCardBtn handleAddCard={handleAddCard}/>
        </div>
    </div>
  )
}

export default Desk