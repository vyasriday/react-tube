import { GET_VIDEOS, GET_SELECTED_VIDEO } from './../actions/index';
import { combineReducers } from 'redux';

const videosReducer = (defaultState = [], action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return [...action.payload];
    default:
      return defaultState;
  }
};

const selectedVideoReducer = (defaultState = null, action) => {
  switch (action.type) {
    case GET_SELECTED_VIDEO:
      return action.payload;
    default:
      return defaultState;
  }
};

export default combineReducers({
  videos: videosReducer,
  selectedVideo: selectedVideoReducer
});
