import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import WarningIcon from '@material-ui/icons/Warning';

import Styles from './styles';

@withStyles(Styles)
class LocationSettings extends React.Component {
  static propTypes = {
    geolocationEnabled: PropTypes.bool.isRequired,
  };

  state = {
    zipCode: '',
    country: '',
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        {!this.props.geolocationEnabled ? (
          <Paper>
            <Typography variant="headline">
              <span>
                <WarningIcon classes={{ root: classes.location_settings_warning_icon_container }} />
                You do not have geolocation enabled on your browser. You will need to enter a zip code
                to search for weather.
              </span>
            </Typography>
          </Paper>
        ) : null}
      </Grid>
    );
  }
}

export default LocationSettings;
