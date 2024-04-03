import { combineReducers } from "redux";
import playlist from "../containers/playlist/slice";
import tracks from "../containers/tracks/slice";
import authentication from "../containers/auth/slice";


const rootReducer = combineReducers({
  authentication,
  playlist,
  tracks,
});

export default rootReducer;
