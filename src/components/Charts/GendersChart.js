import React, { Fragment } from 'react';
import { Bar } from 'react-chartjs-2';
import { useContext } from 'react';
import { UserGlobalContext } from '../../contexts/UserContext/UserGlobalState';
import { useState } from 'react';
import { useEffect } from 'react';

const GendersChart = () => {
  const context = useContext(UserGlobalContext);
  const {
    CountMaleUsers,
    CountFemaleUsers,
    malesCount,
    femalesCount,
  } = context;

  const [genderData, setGenderData] = useState([0, 0]);
  const chartData = {
    labels: ['Male Users', 'Female Users'],
    datasets: [
      {
        label: '# of users',
        labels: ['# of Male users', '# of Female users'],
        data: genderData,
        backgroundColor: ['rgba(0,0,150,0.6)', 'rgba(150,0,0,0.6)'],
      },
    ],
  };
  useEffect(() => {
    CountMaleUsers();
    CountFemaleUsers();
    if (malesCount === '' && femalesCount === '') {
      setGenderData([0, 0]);
    } else {
      setGenderData([malesCount, femalesCount]);
    }
  }, [malesCount, femalesCount]);

  return (
    <Fragment>
      <h2 style={{ textAlign: 'center' }}>Genders Stats</h2>
      <Bar data={chartData} options={{ responsive: true }} />
    </Fragment>
  );
};

export default GendersChart;
