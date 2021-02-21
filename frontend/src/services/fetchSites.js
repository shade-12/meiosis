/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios';
import TEST_RESPONSE from '../constants/response';

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
      console.log(res.data);
      // Check status code: Only status code 200 from server indicates a valid result
      if (res.status !== 200 || !('sites' in res.data.body) || !('keywords' in res.data.body) || !('citation' in res.data.body)) resolve(TEST_RESPONSE);
      else resolve(res.data.body);
    })
    .catch((err) => resolve(TEST_RESPONSE));
});

export default fetchSites;
