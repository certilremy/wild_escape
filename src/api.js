/* eslint-disable consistent-return */
/* eslint-disable no-console */

import axios from 'axios';

const api = (() => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GW1RVxtyH2SruGPOA6w3/scores/';
  // const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DFnP8PNapygyBUOEaX7x/scores/';
  const getScore = async () => {
    try {
      const response = await axios.get(url);
      const scoreList = response.data.result.sort((a, b) => b.score - a.score);
      return scoreList.slice(0, 10);
    } catch (error) {
      console.error(error);
    }
  };


  const postScore = async (name, score) => {
    axios.post(url, {
      user: name,
      score,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { getScore, postScore };
})();

export default api;