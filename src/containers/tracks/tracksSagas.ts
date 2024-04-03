import axios from "axios";
import { call, put, select, takeEvery } from "@redux-saga/core/effects";
import { authSelectors } from "../auth/selectors";
import { getTracks, getTracksFailed, getTracksSuccess } from "./slice";

function* getTracksSaga(): Generator<any, void, any> {
  try {
    const accessToken = yield select(authSelectors.getAccessToken);

    const request = () =>
      axios.get<any>(`https://api.spotify.com/v1/tracks/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    const { data } = yield call(request);

    yield put(getTracksSuccess({ playlist: data }));
  } catch (error: any) {
    yield put(getTracksFailed({ message: error.message }));
  }
}

export default function* tracksSaga(): Generator {
  yield takeEvery(getTracks.type, getTracksSaga);
}
