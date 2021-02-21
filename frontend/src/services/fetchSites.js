/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios';

const SERVER_ENDPOINT = 'https://d9jzeney19.execute-api.ca-central-1.amazonaws.com/default/';

/**
 * Fetch simialr sites recommendation reault back from backend service.
 *
 * @param {String} inputURL A URL string.
 *
 * @return {Promise<any>}
 */
const fetchSites = (inputURL) => new Promise((resolve, reject) => {
  // Send a POST request to backend server to get similar sites result
  axios
    .post(SERVER_ENDPOINT, { url: inputURL }, { timeout: 300000 })
    .then((res) => {
      // Check status code: Only status code 200 from server indicates a valid result
      if (res.status !== 200) reject(`fetchSites::error - Server returns invalid status code ${res.status}`);
      else resolve(res.data);
    })
    .catch((err) => reject(`fetchSites::error - ${JSON.stringify(err)}`));
});

export default fetchSites;
