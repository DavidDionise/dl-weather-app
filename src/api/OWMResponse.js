import format from 'date-fns/format';
import _ from 'lodash';

/**
 * @description - Parses a response from Open Weather Map API
 */
function OWMResponse(response) {
  this.cityName = response.name;
  this.description = response.weather[0].description
    .split(/\s+/)
    .reduce((acc, str, idx, words) => (
      acc.concat(
        _.upperFirst(str),
        `${idx === words.length - 1 ? '' : ' '}`
      )
    ), '');

  this.date = new Date(response.dt * 1000);
  this.formattedDate = format(new Date(this.date), 'ddd, MMM Do');
  this.formattedTime = format(new Date(this.date), 'h:mm a');

  this.fTemp = parseInt(response.main.temp);
  this.cTemp = parseInt((this.fTemp - 32) * (5 / 9));

  this.iconUrl = `${OWM_ICON_BASE_URL}/${response.weather[0].icon}.png`;
}

export default OWMResponse;
