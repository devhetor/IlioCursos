import clienteAxios from '../config/axios';
import {
  ADD_SONG_ERROR,
  ADD_SONG_START,
  ADD_SONG_SUCCESS,
  DELETE_SONG_ERROR,
  DELETE_SONG_START,
  DELETE_SONG_SUCCESS,
  EDIT_SONG_ERROR,
  EDIT_SONG_START,
  EDIT_SONG_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_SONGS_START,
  FETCH_SONGS_SUCCESS,
  GET_SONG_ERROR,
  GET_SONG_START,
  GET_SONG_SUCCESS,
} from '../types';

export const fetchSongsStart = () => {
  return {
    type: FETCH_SONGS_START,
  };
};

export const fetchSongsError = () => {
  return {
    type: FETCH_MOVIES_ERROR,
  };
};

export const fetchSongSuccess = (songs) => {
  return {
    type: FETCH_SONGS_SUCCESS,
    payload: songs,
  };
};

export const fetchSongsAction = () => {
  return (dispatch) => {
    dispatch(fetchSongsStart());
    clienteAxios
      .get('/songs')
      .then((resp) => {
        dispatch(fetchSongSuccess(resp.data));
      })
      .catch((err) => {
        console.error(err);
        dispatch(fetchSongsError());
      });
  };
};

export const deleteSongStart = () => {
  return {
    type: DELETE_SONG_START,
  };
};

export const deleteSongError = () => {
  return {
    type: DELETE_SONG_ERROR,
  };
};

export const deleteSongSuccess = (id) => {
  return {
    type: DELETE_SONG_SUCCESS,
    payload: id,
  };
};

export const deleteSongAction = (id) => {
  return (dispatch) => {
    dispatch(deleteSongStart());
    clienteAxios
      .delete(`/songs/${id}`)
      .then((resp) => {
        dispatch(deleteSongSuccess(id));
      })
      .catch((err) => {
        console.error(err);
        dispatch(deleteSongError());
      });
  };
};

export const addSongStart = () => {
  return {
    type: ADD_SONG_START,
  };
};

export const addSongError = () => {
  return {
    type: ADD_SONG_ERROR,
  };
};

export const addSongSuccess = (song) => {
  return {
    type: ADD_SONG_SUCCESS,
    payload: song,
  };
};

export const addSongAction = (song) => {
  return (dispatch) => {
    dispatch(addSongStart());
    clienteAxios
      .post(`/songs`, song)
      .then((resp) => {
        debugger;
        console.log(resp);
        dispatch(addSongSuccess(resp.data));
      })
      .catch((err) => {
        console.error(err);
        dispatch(addSongError());
      });
  };
};

export const getSongStart = () => {
  return {
    type: GET_SONG_START,
  };
};

export const getSongError = () => {
  return {
    type: GET_SONG_ERROR,
  };
};

export const getSongSuccess = (song) => {
  return {
    type: GET_SONG_SUCCESS,
    payload: song,
  };
};

export const getSongAction = (id) => {
  return (dispatch) => {
    dispatch(getSongStart());
    clienteAxios
      .get(`/songs/${id}`)
      .then((resp) => {
        console.log(resp);
        dispatch(getSongSuccess(resp.data));
      })
      .catch((err) => {
        console.error(err);
        dispatch(getSongError());
      });
  };
};

export const editSongStart = () => {
  return {
    type: EDIT_SONG_START,
  };
};

export const editSongError = () => {
  return {
    type: EDIT_SONG_ERROR,
  };
};

export const editSongSuccess = (song) => {
  return {
    type: EDIT_SONG_SUCCESS,
    payload: song,
  };
};

export const editSongAction = (song) => {
  debugger;
  return (dispatch) => {
    dispatch(editSongStart());
    clienteAxios
      .put(`/songs/${song.id}`, {
        title: song.title,
        url: song.url,
        rating: song.rating,
      })
      .then((resp) => {
        dispatch(editSongSuccess(resp.data));
      })
      .catch((err) => {
        console.error(err);
        dispatch(editSongError());
      });
  };
};
