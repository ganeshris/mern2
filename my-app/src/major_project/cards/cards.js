import React from 'react'
import "./cards.css"
import { CardsData } from '../projectf/data2'
import Card from '../card/card'

                                  // here i define what we see in card
const Cards = () => {
  return (
    <div  className='cards'>
      {CardsData.map((card,index)=>{
        return(
            <div className='parentContainer'>
                <Card  
                title={card.title}
                color={card.color}
                barValue={card.barValue}
                value={card.value}
                png={card.png}
                series={card.series}
                
                />


            </div>
        )
      })}
    </div>
  )
}

export default Cards;
