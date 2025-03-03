import {
  ADD_SONG_ERROR,
  ADD_SONG_SUCCESS,
  DELETE_SONG_ERROR,
  DELETE_SONG_START,
  DELETE_SONG_SUCCESS,
  FETCH_SONGS_ERROR,
  FETCH_SONGS_START,
  FETCH_SONGS_SUCCESS,
  ADD_SONG_START,
  GET_SONG_SUCCESS,
  GET_SONG_START,
  GET_SONG_ERROR,
  EDIT_SONG_START,
  EDIT_SONG_ERROR,
  EDIT_SONG_SUCCESS,
} from '../types';

const initialState = {
  songs: [],
  error: null,
  loading: false,
  song: {},
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGS_START:
      return {
        ...state,
        loading: true,
        song: {},
      };

    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        song: {},
        songs: action.payload,
      };

    case FETCH_SONGS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        song: {},
        songs: [],
      };
    case DELETE_SONG_START:
      return {
        ...state,
      };
    case DELETE_SONG_ERROR:
      return {
        ...state,
        error: true,
      };
    case DELETE_SONG_SUCCESS:
      return {
        ...state,
        error: false,
        songs: state.songs.filter((s) => s.id !== action.payload),
      };
    case ADD_SONG_START:
      return {
        ...state,
        error: null,
      };
    case ADD_SONG_ERROR:
      return {
        ...state,
        error: true,
      };
    case ADD_SONG_SUCCESS:
      return {
        ...state,
        error: false,
        songs: [...state.songs, action.payload],
      };
    case GET_SONG_START:
      return {
        ...state,
        error: null,
      };
    case GET_SONG_ERROR:
      return {
        ...state,
        error: true,
      };
    case GET_SONG_SUCCESS:
      return {
        ...state,
        error: false,
        song: action.payload,
      };
    case EDIT_SONG_START:
      return {
        ...state,
        error: null,
      };
    case EDIT_SONG_ERROR:
      return {
        ...state,
        error: true,
      };
    case EDIT_SONG_SUCCESS:
      return {
        ...state,
        error: false,
        // find song by id
        // repalce with new song
        // otherwise use existing song
        songs: state.songs.map((song) =>
          song.id === action.payload.id ? (song = action.payload) : song
        ),
      };
    default:
      return state;
  }
};

export default songsReducer;
