import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

import Styles from './styles';

const FiveDayTemp = props => (
  <div>five day</div>
);

FiveDayTemp.propTypes = {
  // from withStyles
  classes: PropTypes.object.isRequired,
  // from router
  location: PropTypes.object.isRequired,
};

export default withStyles(Styles)(FiveDayTemp);
