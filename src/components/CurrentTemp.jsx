import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import OWMResponse from 'api/OWMResponse';

import Styles from './styles';

const CurrentTemp = props => {
  const { weatherData } = props;
  return (
    <Grid container>
      <Grid item xs={12} className={{ item: props.classes.current_temp_upper_container }}>
        <Typography
          variant="body2"
          classes={{ root: props.classes.current_temp_city_name }}
        >
          {weatherData.cityName}
          <span className={props.classes.weather_icon_container}>
            <img src={weatherData.iconUrl} />
          </span>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="display1">
          {`${weatherData.fTemp}\xB0 F/ ${weatherData.cTemp}\xB0 C`}
        </Typography>
      </Grid>
    </Grid>
  );
};

CurrentTemp.propTypes = {
  weatherData: PropTypes.instanceOf(OWMResponse),
  // from withStyles
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(CurrentTemp);
