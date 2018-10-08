import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const NotFound = props => (
  <div>
    <Typography variant="headline">Invalid URL</Typography>
    <Typography variant="headline">
      <Button onClick={props.handleClickHome}>Home</Button>
    </Typography>
  </div>
);

NotFound.propTypes = {
  handleClickHome: PropTypes.func.isRequired,
};

export default NotFound;
