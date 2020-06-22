import React, { Fragment } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useContext } from 'react';
import { UserGlobalContext } from '../../contexts/UserContext/UserGlobalState';
import { useState } from 'react';
import { useEffect } from 'react';

const AgeStaticsChart = () => {
  const context = useContext(UserGlobalContext);
  const { GetAgeStatics, ageStatics } = context;

  const [ageData, setAgeData] = useState(ageStatics);
  useEffect(() => {
    GetAgeStatics();
  }, []);
  useEffect(() => {
    setAgeData(ageStatics);
  }, [ageStatics]);
  const chartData = {
    labels: [
      'age>=18 and age<30',
      'age>=30 and age<40',
      'age>=40 and age<50',
      'age>=50 and age<60',
      'age>=60 and age<70',
      'age>=70',
    ],
    datasets: [
      {
        labels: [
          'age>=18 and age<30',
          'age>=30 and age<40',
          'age>=40 and age<50',
          'age>=50 and age<60',
          'age>=60 and age<70',
          'age>=70',
        ],
        data: ageData,
        backgroundColor: [
          'rgba(0,0,150,0.6)',
          'rgba(150,150,0,0.6)',
          'rgba(150,0,0,0.6)',
          'rgba(0,150,0,0.6)',
          'rgba(150,0,150,0.6)',
          'rgba(150,125,25,0.6)',
        ],
      },
    ],
  };

  return (
    <Fragment>
      <h2 style={{ textAlign: 'center' }}>Age Statics Stats</h2>
      <Doughnut data={chartData} options={{ responsive: true }} />
    </Fragment>
  );
};

export default AgeStaticsChart;
