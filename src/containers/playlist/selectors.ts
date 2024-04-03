import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store/store";

const selectSelf = (state: RootState) => state.playlist;

export const playlistSelectors = {
  getPlaylist: createSelector(selectSelf, (list) => list.playlist),
  postPlaylist: createSelector(selectSelf, (list) => list.playlist),
};
