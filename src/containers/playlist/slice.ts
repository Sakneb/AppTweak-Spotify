import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ErrorPayload, RequestStatus } from "../../types/requests";

export interface User {
  userId?: string;
  userName?: string;
}

export interface AuthState {
  accessToken?: string;
  user?: User;
  playlist?: any;
  status: RequestStatus;
  error?: string;
}

export interface AccessTokenPayload {
  accessToken: string;
}

const initialState: AuthState = {
  status: RequestStatus.IDLE,
};

export const getPlaylist = createAction("playlist/getPlaylist");
export const postPlaylist = createAction("playlist/postPlaylist");
export const getPlaylistSuccess = createAction<any>(
  "playlist/getPlaylistSuccess"
);
export const getPlaylistFailed = createAction<ErrorPayload>(
  "playlist/getPlaylistFailed"
);
export const postPlaylistSuccess = createAction<any>(
  "playlist/postPlaylistSuccess"
);
export const postPlaylistFailed = createAction<ErrorPayload>(
  "playlist/postPlaylistFailed"
);

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<AccessTokenPayload>) {
      state.accessToken = action.payload.accessToken;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlaylist, (state) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(getPlaylistSuccess, (state, action) => {
        state.status = RequestStatus.SUCCESS;
        state.playlist = action.payload;
      })
      .addCase(getPlaylistFailed, (state, action) => {
        state.status = RequestStatus.ERROR;
        state.error = action.payload.message;
      })
      .addCase(postPlaylist, (state, action) => {
        if (action.payload) {
          state.status = RequestStatus.SUCCESS;
          state.playlist = action.payload;
        }
      })

      .addCase(postPlaylistSuccess, (state, action) => {
        state.status = RequestStatus.SUCCESS;
        state.playlist = action.payload;
      })
      .addCase(postPlaylistFailed, (state, action) => {
        state.status = RequestStatus.ERROR;
        state.error = action.payload.message;
      });
  },
});

export const { setAccessToken } = playlistSlice.actions;

export default playlistSlice.reducer;
