import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Styles from 'styles';

const TabContainer = props => (
  <Paper classes={{ root: props.classes.tab_container_outer_container }}>
    <Grid container classes={{ container: props.classes.tab_container_grid_container }}>
      {props.title ? (
        <Grid item xs={12} classes={{ item: props.classes.tab_container_title_container }}>
          <Typography variant="display1">{props.title}</Typography>
        </Grid>
      ) : null}
      <Grid item xs={12} classes={{ item: props.classes.tabs_container_inner_container }}>
        {props.children}
      </Grid>
    </Grid>
  </Paper>
);

TabContainer.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

TabContainer.defaultProps = {
  title: null,
};

export default withStyles(Styles)(TabContainer);
