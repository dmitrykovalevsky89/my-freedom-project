import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { taskReducer } from "./pages/inbox";
import { InboxService } from "./pages/inbox/InboxService";

const reducerWithInbox = combineReducers({
  tasks: taskReducer
});

const enhancers = [
  applyMiddleware(
    reduxThunk.withExtraArgument({
      inboxService: new InboxService()
    })
  )
];

const store = createStore(reducerWithInbox, compose(...enhancers));

ReactDOM.render(<App store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
