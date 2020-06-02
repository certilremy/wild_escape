
import axios from 'axios';

const api = (() => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DFnP8PNapygyBUOEaX7x/scores/';
  const getScore = async () => {
    try {
      const response = await axios.get(url);
      const scoreList = response.data.result;
    } catch (error) {
      console.error(error);
    }
  };

  return { getScore };
})();

export default api;