import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import CircularProgress from '@material-ui/core/CircularProgress';
import TabContainer from 'components/TabContainer';
import routes from 'routes';
import fetchWeather from 'api/fetchWeather';
import OWMResponse from 'api/OWMResponse';

import Styles from './styles';

@withStyles(Styles)
@withRouter
class MainLayout extends React.Component {
  static propTypes = {
    // from withStyles
    classes: PropTypes.object.isRequired,
    history: PropTypes.object
  };

  state = {
    currentTab: 0,
    fetching: true,
    zip: null,
    locationInitialized: false,
    currentWeather: null,
  };
  fetchPromise = null;
  userCoords = null;

  componentDidMount() {
    if (
      navigator &&
      navigator.geolocation
    ) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude: lat, longitude: lon } = position.coords || {};
        this.userCoords = { lat, lon };

        this.fetchPromise = fetchWeather({ type: 'weather', coords: this.userCoords })
          .then((res) => {
            this.setState({
              locationInitialized: true,
              fetching: false,
              currentWeather: res,
            });
          });
      });
    }
  }
  componentWillUnmount() {
    if (this.fetchPromise) {
      this.fetchPromise.cancel();
    }
  }
  handleTabChange = (e, tabIdx) => {
    this.setState({ currentTab: tabIdx });
    this.props.history.push(routes[tabIdx].path);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.main_layout_container}>
          <div className={classes.main_layout_inner_container}>
            <div className={classes.tabs_container}>
              <AppBar position="static" color="default">
                <Tabs
                  onChange={this.handleTabChange}
                  value={this.state.currentTab}
                  fullWidth
                  indicatorColor="primary"
                >
                  {routes.map(route => <Tab label={route.label} key={route.path}/>)}
                </Tabs>
                {this.state.fetching ? (
                  <div className={classes.progress_spinner_container}>
                    <CircularProgress />
                  </div>
                ) : (
                  <Switch>
                    {routes.map(route => (
                      <Route
                        key={route.path}
                        path={route.path}
                        exact
                        render={props => (
                          <TabContainer title={route.title}>
                            <route.component
                              {...props}
                              weatherData={new OWMResponse(this.state.currentWeather)}
                            />
                          </TabContainer>
                        )}
                      />
                    ))}
                  </Switch>
                )}
              </AppBar>
            </div>
          </div>
        </div>
        <div className={this.props.classes.main_latout_overlay} />
      </React.Fragment>
    );
  }
}

export default MainLayout;
