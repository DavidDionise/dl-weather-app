import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import OWMResponse from 'api/OWMResponse';

import Styles from './styles';

class FiveDayTemp extends React.Component {
  static propTypes = {
    fiveDayForcast: PropTypes.arrayOf(
      PropTypes.instanceOf(OWMResponse).isRequired,
    ).isRequired,
    // from withStyles
    classes: PropTypes.object.isRequired,
  };

  state = {
    dateGroups: {},
  };

  componentDidMount() {
    // group the weather data by date
    const groupedWeatherData = this.props.fiveDayForcast.reduce((acc, data) => ({
      ...acc,
      [data.formattedDate]: (
        _.get(acc, data.formattedDate, [])
          .concat(data)
          .sort((d1, d2) => d1.date < d2.date ? -1 : 1)
      ),
    }), {});

    this.setState({ dateGroups: groupedWeatherData });
  }

  render() {
    const { classes } = this.props;
    const sortedDateGroupKeys = Object.keys(this.state.dateGroups).sort((d1, d2) => (
      this.state.dateGroups[d1][0].date < this.state.dateGroups[d2][0].date ? -1 : 1
    ));

    return (
      <div className={classes.five_day_forecast_container}>
        {sortedDateGroupKeys.map(key => (
          <React.Fragment key={key}>
            <Typography variant="title">{key}</Typography>
            <List>
              {this.state.dateGroups[key].map((weatherData, idx) => (
                <ListItem
                  key={String(weatherData.date.getTime())}
                  classes={{ root: `${classes.forecast_list_item}${idx % 2 === 0 ? ' even' : ''}` }}
                >
                  <Grid container>
                    <Grid item xs={4} sm={3}>
                      <Typography variant="subheading">{weatherData.formattedTime}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <div className={classes.forecast_icon_container}>
                        <img src={weatherData.iconUrl} />
                      </div>
                    </Grid>
                    <Grid item xs={5} sm={6}>
                      <Typography variant="subheading">
                        {`${weatherData.fTemp}\xB0 F/ ${weatherData.cTemp}\xB0 C`}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
              ))}
            </List>
          </React.Fragment>
        ))}
      </div>
    )
  }
}

export default withStyles(Styles)(FiveDayTemp);
