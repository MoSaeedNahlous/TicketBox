import React, { useState } from 'react';
import Match from './Match';
import { GameGlobalContext } from '../../../contexts/gameContext/GameGlobalState';
import { useContext } from 'react';
import Pagination from '../Pagination';
import { useEffect } from 'react';
import Spinner from '../Spinner';

const Matches = ({ games }) => {
  const context = useContext(GameGlobalContext);
  const { GetGames, ClearError } = context;

  // const [currentPage, setcurrentPage] = useState(1);
  // const [cardsPerPage, setcardsPerPage] = useState(9);

  // const indexOfLastCard = currentPage * cardsPerPage;
  // const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  // const currentCards = games
  //   .filter((game) => game.stadium !== null)
  //   .slice(indexOfFirstCard, indexOfLastCard);
  // console.log('this is currentCards   ' + games);

  //change page
  // const paginateFun = (pageNumber) => {
  //   setcurrentPage(pageNumber);
  //   window.scrollTo(0, 300);
  // };
  while (context.isLoading) {
    return <Spinner />;
  }

  return (
    <div className='container'>
      <div className='Mycards'>
        {games.map((game) => {
          return (
            <Match
              game={game}
              host={game.gameTeams.host}
              guest={game.gameTeams.guest}
            />
          );
        })}
      </div>

      <br />

      {/* <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={games.filter((game) => game.stadium !== null).length}
        paginate={paginateFun}
      /> */}
    </div>
  );
};

export default Matches;
