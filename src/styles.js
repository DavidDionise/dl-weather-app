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
  paper_container: {
    height: '350px',
    width: '500px',
  },
});
