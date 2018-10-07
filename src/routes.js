import React from 'react';
import CurrentTemp from 'components/CurrentTemp';
import FiveDayTemp from 'components/FiveDayTemp';
import LocationSettings from 'components/LocationSettings';

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
  {
    label: 'Location',
    title: 'Location Settings',
    path: '/location-settings',
    component: LocationSettings
  },
];
