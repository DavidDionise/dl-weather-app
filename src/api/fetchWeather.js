import _ from 'lodash';
import Bluebird from 'bluebird';
import objectToQueryString from './objectToQueryString';

/**
 * @description - Calls the open weather map api to fetch
 *  the current weather. Will either fetch by lat/lon coords (preferred),
 *  or by zip code
 * @param {Object} props
 * @param {String} type - enum('weather', 'forecast'); 'weather' serves the current weather,
 *  'forecast' serves a five day forecast
 * @prop {{ lat: String, lon: String }} props.coords - Coordinates for a fetch
 * @prop {{ code: String, country: String }} props.zip - Zip code and country code
 */
const fetchWeather = (props = {}) => {
  if (props.type !== 'weather' && props.type !== 'forecast') {
    console.warn(`The 'type' property of 'fetchWeather' must be either 'weather' or 'forecast'`);
  }

  const queryString = (
    props.coords ?
      objectToQueryString(_.get(props, 'coords', {})) :
      `${objectToQueryString({ zip: _.get(props, 'zip.code', {}) })},${_.get(props, 'zip.country', 'us')}`
  );

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
