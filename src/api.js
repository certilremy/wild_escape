/* eslint-disable no-console */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

import axios from 'axios';

const api = (() => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DFnP8PNapygyBUOEaX7x/scores/';
  const getScore = async () => {
    try {
      const response = await axios.get(url);
      const scoreList = response.data.result.sort((a, b) => b.score - a.score);
      return scoreList.slice(0, 10);
    } catch (error) {
      console.log(error);
    }
  };


  const postScore = async (name, score) => {
    axios.post(url, {
      user: name,
      score,
    })
      .catch((error) => {
        console.log(error);
      });
  };

  return { getScore, postScore, url };
})();

export default api;