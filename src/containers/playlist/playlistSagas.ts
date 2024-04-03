import axios from "axios";
import { call, put, select, takeEvery } from "@redux-saga/core/effects";
import {
  getPlaylist,
  getPlaylistFailed,
  getPlaylistSuccess,
  postPlaylistSuccess,
  postPlaylistFailed,
  postPlaylist,
} from "./slice";
import { authSelectors } from "../auth/selectors";
import { PayloadAction } from "@reduxjs/toolkit";

function* getPlaylistSaga(): Generator<any, void, any> {
  try {
    const accessToken = yield select(authSelectors.getAccessToken);
    const request = () =>
      axios.get<any>(
        `https://api.spotify.com/v1/users/31bw22pkzkefcrzlamn6ytaltmoy/playlists`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
    const { data } = yield call(request);

    yield put(getPlaylistSuccess({ playlist: data }));
  } catch (error: any) {
    yield put(getPlaylistFailed({ message: error.message }));
  }
}

export default function* playlistSaga(): Generator {
  yield takeEvery(getPlaylist.type, getPlaylistSaga);
}
