import _ from 'lodash';
import Bluebird from 'bluebird';
import objectToQueryString from './objectToQueryString';

/**
 * @description - Calls the open weather map api to fetch
 *  the current weather based on current user's coordinates
 * @param {Object} props
 * @param {String} type - enum('weather', 'forecast'); 'weather' serves the current weather,
 *  'forecast' serves a five day forecast
 * @prop {{ lat: String, lon: String }} props.coords - Coordinates for a fetch
 */
const fetchWeather = (props = {}) => {
  if (props.type !== 'weather' && props.type !== 'forecast') {
    console.warn(`The 'type' property of 'fetchWeather' must be either 'weather' or 'forecast'`);
  }

  const queryString = objectToQueryString(_.get(props, 'coords', {}));

  return Bluebird.resolve(
    fetch(`${OWM_BASE_URL}/${OWM_VERSION}/${props.type}?${queryString}&units=imperial&APPID=${OWM_API_KEY}`)
      .then(res => {
        if (res.status === 404) {
          return Bluebird.reject(new Error('No city found'));
        }

        return res.json();
      })
  );
}

export default fetchWeather;
