import {
  GET_VIDEOS,
  GET_SELECTED_VIDEO,
  SAVE_RECENTLY_PLAYED,
  TOGGLE_SIDEBAR,
  TRENDING
} from './../actions';
import { combineReducers } from 'redux';

const videosReducer = (state = [], action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return [...action.payload];
    default:
      return state;
  }
};

const selectedVideoReducer = (state = null, action) => {
  switch (action.type) {
    case GET_SELECTED_VIDEO:
      return action.payload;
    default:
      return state;
  }
};

const recentlyPlayedVideos = (state = [], action) => {
  switch (action.type) {
    case SAVE_RECENTLY_PLAYED:
      return [...state, action.payload];
    default:
      return state;
  }
};

const toggleSidebar = (state = false, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return !state;
  }
  return state;
};

const trendingVideos = (state = [], action) => {
  switch (action.type) {
    case TRENDING:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  videos: videosReducer,
  selectedVideo: selectedVideoReducer,
  recentVideos: recentlyPlayedVideos,
  sidebarToggle: toggleSidebar,
  trendingVideos: trendingVideos
});
