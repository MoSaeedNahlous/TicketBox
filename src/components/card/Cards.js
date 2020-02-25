import React from 'react'
import Card from '../card/Card.js'
import '../../App.css'

const Cards = () => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Featured Matches</h1>
            <br />
        <div className="Mycards" >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            
        </div>
        </div>
    )
}

export default Cards
