const tabContainerHeight = 450;

export default theme => ({
  fixed_app_bar_container: {
    height: '100%',
  },
  main_layout_container: {
    position: 'absolute',
    backgroundColor: theme.palette.grey[900],
    backgroundImage: 'url(images/weather-wallpaper.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    width: '100%',
    height: '100%',
  },
  main_latout_overlay: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.grey[900],
    opacity: '0.5',
  },
  main_layout_inner_container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 3,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 8,

    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
    },
  },
  tabs_container: {
    width: 500,
    height: 400,

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
  },
  tab_container_outer_container: {
    width: `calc(100% - ${theme.spacing.unit * 8}px)`,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px`,
    height: tabContainerHeight,

    [theme.breakpoints.down('sm')]: {
      height: '100%',
    },
  },

  tab_container_grid_container: {
    height: '100%',
  },
  tab_container_title_container: {
    minHeight: 40,
  },

  tabs_container_inner_container: {
    height: '100%',
  },
  progress_spinner_container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  current_temp_container: {
    marginTop: theme.spacing.unit * 2,
  },
  current_temp_upper_container: {
    display: 'flex',
  },

  current_temp_city_name: {
    minWidth: 0,
  },
  weather_icon_container: {
    '& img': {
      position: 'relative',
      top: 17,
      right: 5,
    },
  },

  forecast_icon_container: {
    height: 30,

    '& img': {
      position: 'relative',
      bottom: 10,
    },
  },

  forecast_list_item: {
    '&.even': {
      backgroundColor: theme.palette.grey[100],
    },
  },

  five_day_forecast_container: {
    height: '80%',
    marginTop: theme.spacing.unit * 4,
    overflowY: 'auto',
  },

  warning_icon_container: {
    color: 'red',
    position: 'relative',
    top: 3,
    marginRight: theme.spacing.unit,
  },
});
