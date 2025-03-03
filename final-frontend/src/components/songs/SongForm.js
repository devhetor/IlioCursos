import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  addSongAction,
  editSongAction,
  getSongAction,
} from '../../actions/songsActions';

const SongForm = ({ history, match }) => {
  const { handleSubmit, errors, register } = useForm();
  const dispatch = useDispatch();
  const song = useSelector((state) => state.songs.song);
  const [title, setTitle] = useState('New Song');

  // when user go to edit route
  // we have to display the current song object
  // to form
  // we need to dispatch the action when react mounts the component
  useEffect(() => {
    if (match.params.id) {
      setTitle('Edit Song');
      // don't need to convert string into number
      // becuase monooge id is in string format
      dispatch(getSongAction(match.params.id));
    }
  }, [dispatch, match.params.id]);

  const submitForm = (data) => {
    // if there is id in the route then perform
    if (match.params.id) {
      // dont need to use + sign here
      // instead of id we will use _id
      dispatch(editSongAction({ id: match.params.id, title: data.title, url: data.url, rating: +data.rating }));
      history.push('/songs');
    } else {
      // else perform create operation
      dispatch(addSongAction({title: data.title, url: data.url, rating: +data.rating}));
      history.push('/songs');
    }
  };
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold ">{title}</h2>
            <form onSubmit={handleSubmit(submitForm)}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control  "
                  placeholder="Song Title"
                  name="title"
                  ref={register({ required: true })}
                  defaultValue={song.title}
                />
                {errors.title && (
                  <div className="font-weight-bold alert alert-danger text-center mt-4">
                    This field is required
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>Url</label>
                <input
                  type="text"
                  className="form-control  "
                  placeholder="Song URL"
                  name="url"
                  ref={register({ required: true })}
                  defaultValue={song.url}
                />
                {errors.url && (
                  <div className="font-weight-bold alert alert-danger text-center mt-4">
                    This field is required
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>Rating</label>
                <input
                  type="number"
                  className="form-control  "
                  placeholder="Song Rating"
                  name="rating"
                  ref={register({ required: true })}
                  defaultValue={song.rating}
                />
                {errors.rating && (
                  <div className="font-weight-bold alert alert-danger text-center mt-4">
                    This field is required
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-info rounded-pill font-weight-bold text-uppercase d-block w-100"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SongForm;
