import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import OWMResponse from 'api/OWMResponse';

import Styles from 'styles';

const CurrentTemp = props => {
  const { currentWeather, classes } = props;
  return (
    <Grid container classes={{ container: classes.current_temp_container }}>
      <Grid
        item
        xs={12}
        classes={{ item: classes.current_temp_upper_container }}
      >
        <Typography
          variant="title"
          classes={{ root: classes.current_temp_city_name }}
        >
          {currentWeather.cityName}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subheading">
          <span className={classes.weather_icon_container}>
            <img src={currentWeather.iconUrl} />
          </span>
          {currentWeather.description}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="display1">
          {`${currentWeather.fTemp}\xB0 F/ ${currentWeather.cTemp}\xB0 C`}
        </Typography>
      </Grid>
    </Grid>
  );
};

CurrentTemp.propTypes = {
  currentWeather: PropTypes.instanceOf(OWMResponse).isRequired,
  // from withStyles
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(CurrentTemp);
