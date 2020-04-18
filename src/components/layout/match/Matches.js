import React, { useState } from 'react'
import Match from './Match'
import {GameGlobalContext} from '../../../contexts/gameContext/GameGlobalState'
import { useContext } from 'react'
import Pagination from '../Pagination'
import { useEffect } from 'react'

const Matches = () => {
    const context = useContext(GameGlobalContext)
    const {games,GetGames,ClearError} = context

    useEffect(() => {
        ClearError()
        GetGames()
    }, [])

    const [currentPage, setcurrentPage] = useState(1)
    const [cardsPerPage, setcardsPerPage] = useState(9)

    const indexOfLastCard = currentPage * cardsPerPage
    const indexOfFirstCard = indexOfLastCard - cardsPerPage
    const currentCards = games.filter(game => game.teams.length !== 0).slice(indexOfFirstCard,indexOfLastCard)

    //change page
    const paginateFun = (pageNumber) => {
    setcurrentPage(pageNumber)
    window.scrollTo(0, 300);
    }

    
    
    return (
        <div className="container"  >
        
            
                
            
                <div className="Mycards" >
                    

                {currentCards.map((game)=>(<Match key={game.id} game={game}/>))}



                    
                    </div>
                    
                    
                    
                
            
            <br />
                
            <Pagination cardsPerPage={cardsPerPage} totalCards={games.filter(game => game.teams.length !== 0).length} paginate={paginateFun}/>
            
        </div>
    )
}

export default Matches

