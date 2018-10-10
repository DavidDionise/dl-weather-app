import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Bluebird from 'bluebird';
import withStyles from '@material-ui/core/styles/withStyles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import WarningIcon from '@material-ui/icons/Warning';
import TabContainer from 'components/TabContainer';
import NotFound from 'components/NotFound';
import routes from 'routes';
import fetchWeather from 'api/fetchWeather';
import OWMResponse from 'api/OWMResponse';

import Styles from 'styles';

@withStyles(Styles)
@withRouter
@withWidth()
class MainLayout extends React.Component {
  static propTypes = {
    // from router
    history: PropTypes.object,
    // from withStyles
    classes: PropTypes.object.isRequired,
    // from withWidth
    width: PropTypes.string.isRequired,
  };

  state = {
    currentTab: 0,
    fetching: true,
    currentWeather: null,
    fiveDayForcast: null,
    error: null,
  };
  fetchPromise = null;

  componentDidMount() {
    const { pathname } = this.props.history.location;
    let currentTab = 0;
    if (pathname !== '/') {
      currentTab = routes.findIndex(route => (
        route.path === pathname
      ));

      if (currentTab === -1) {
        currentTab = false;
      }
    }

    if (
      navigator &&
      navigator.geolocation
    ) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude: lat, longitude: lon } = position.coords || {};

        this.fetchPromise = Bluebird.all([
          fetchWeather({ type: 'weather', coords: { lat, lon } }),
          fetchWeather({ type: 'forecast', coords: { lat, lon } }),
        ])
          .then((res) => {
            this.setState({
              currentTab,
              fetching: false,
              currentWeather: res[0],
              fiveDayForcast: res[1].list,
            });
          })
          .catch((e) => this.setState({ error: e.message || e }));
      });
    } else {
      this.setState({
        error: 'You must have geolocation services turned on in your browser to use this website',
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
              <AppBar
                position={isWidthUp('sm', this.props.width) ? 'static' : 'fixed'}
                color="default"
                classes={{ positionFixed: classes.fixed_app_bar_container }}
              >
                <Tabs
                  onChange={this.handleTabChange}
                  value={this.state.currentTab}
                  fullWidth
                  indicatorColor="primary"
                >
                  {routes.map(route => (
                    <Tab
                      label={route.label}
                      key={route.path}
                      disabled={this.state.error != null}
                    />
                  ))}
                </Tabs>
                {this.state.error ? (
                  <TabContainer>
                    <Typography variant="headline">
                      <span className={classes.warning_icon_container}>
                        <WarningIcon />
                      </span>
                      {this.state.error}
                    </Typography>
                  </TabContainer>
                ) : this.state.fetching ? (
                  <TabContainer>
                    <div className={classes.progress_spinner_container}>
                      <CircularProgress />
                    </div>
                  </TabContainer>
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
                              currentWeather={new OWMResponse(this.state.currentWeather)}
                              fiveDayForcast={this.state.fiveDayForcast.map(data => new OWMResponse(data))}
                            />
                          </TabContainer>
                        )}
                      />
                    ))}
                    <Route
                      render={() => (
                        <TabContainer title="404">
                          <NotFound handleClickHome={() => this.handleTabChange(null, 0)} />
                        </TabContainer>
                      )}
                    />
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
