import axios from 'axios';

export const API_KEY = 'AIzaSyAtdLZjhct_AKDZpvqGwzyC1qln1HurW8w';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});
