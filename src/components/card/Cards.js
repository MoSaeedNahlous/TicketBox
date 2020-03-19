import React,{useState} from 'react'
import Card from './Card'

import '../../App.css'

const Cards = ({cards}) => {
    
    return (
        <div className="container"  >
        
            
                
            
                <div className="Mycards" >
                    

                {cards.map((card)=>(<Card key={card.id} card={card}/>))}



                    <div  style={{display:'flex',justifyContent:'center'}}>
                        
                        
                    </div>
                    </div>
                    
                    
                    
                
            
            <br />
                
              
            
        </div>
    )
}

export default Cards

