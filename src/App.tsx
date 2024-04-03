import React, { FC, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "./containers/auth/selectors";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./views/Home";

const App: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUser);
  return (
    <div className="App">
      <CssBaseline />
      <Home />
    </div>
  );
};

export default App;
