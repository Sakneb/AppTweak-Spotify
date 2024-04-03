import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ErrorPayload, RequestStatus } from "../../types/requests";

export interface User {
  userId?: string;
  userName?: string;
}

export interface AuthState {
  accessToken?: string;
  user?: User;
  tracks?: any;
  status: RequestStatus;
  error?: string;
}

export interface AccessTokenPayload {
  accessToken: string;
}

const initialState: AuthState = {
  status: RequestStatus.IDLE,
};

export const getTracks = createAction("tracks/getTracks");
export const getTracksSuccess = createAction<any>("tracks/getTracksSuccess");
export const getTracksFailed = createAction<ErrorPayload>(
    "tracks/getTracksFailed"
);

const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<AccessTokenPayload>) {
      state.accessToken = action.payload.accessToken;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(getTracks, (state) => {
          state.status = RequestStatus.PENDING;
        })
        .addCase(getTracksSuccess, (state, action) => {
          state.status = RequestStatus.SUCCESS;
          state.tracks = action.payload;
        })
        .addCase(getTracksFailed, (state, action) => {
          state.status = RequestStatus.ERROR;
          state.error = action.payload.message;
        });
  },
});

export const { setAccessToken } = tracksSlice.actions;

export default tracksSlice.reducer;
