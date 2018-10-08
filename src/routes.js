import React from 'react';
import CurrentTemp from 'components/CurrentTemp';
import FiveDayTemp from 'components/FiveDayTemp';

export default [
  {
    label: 'Current Temp',
    title: 'Current Temperature',
    path: '/',
    component: CurrentTemp,
  },
  {
    label: '5 Day',
    title: '5 Day Forecast',
    path: '/five-day-forecast',
    component: FiveDayTemp,
  },
];
