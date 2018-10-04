import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Slide from '@material-ui/core/Slide';
import { Switch, Route } from 'react-router-dom';
import CurrentTemp from './CurrentTemp';
import FiveDayTemp from './FiveDayTemp';

import Styles from './styles';

@withStyles(Styles)
class MainLayout extends React.Component {
  static propTypes = {
    // from withStyles
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <React.Fragment>
        <div className={this.props.classes.main_layout_container}>
          <div className={this.props.classes.main_layout_inner_container}>
            <Switch>
              <Route
                path="/"
                exact
                render={props => (
                  <Slide direction="left" in key="current-temps">
                    <CurrentTemp {...props} />
                  </Slide>
                )}
              />

              <Route
                path="/five-day-temps"
                exact
                render={props => (
                  <Slide direction="left" in key="five-day-temps">
                    <FiveDayTemp {...props} />
                  </Slide>
                )}
              />
            </Switch>
          </div>
        </div>
        <div className={this.props.classes.main_latout_overlay} />
      </React.Fragment>
    );
  }
}

export default MainLayout;
