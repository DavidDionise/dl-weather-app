export default theme => ({
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
    opacity: '0.9',
  },
  main_layout_inner_container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 3,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 8,
  },
  tabs_container: {
    width: 500,
    height: 400,
  },
  tab_container_outer_container: {
    height: 350,
    width: 500,
  },
  tabs_container_inner_container: {
    height: 350,
  },
  progress_spinner_container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
      left: 17,
    },
  },
});
