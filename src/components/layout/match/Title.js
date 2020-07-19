import React from 'react';

const Title = ({ team }) => {
  return (
    <div>
      <img width='75' height='75' src={team.image} alt={team.name + 'Logo'} />{' '}
      {team.name}
    </div>
  );
};

export default Title;
