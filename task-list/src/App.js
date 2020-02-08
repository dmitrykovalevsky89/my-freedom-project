import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Route,
  NavLink,
  Redirect,
  Switch
} from "react-router-dom";
import MainPage from "./pages/main/MainPage";
// import { InboxList } from "./pages/inbox/InboxList";
import { ConnectedInboxPage } from "./pages/inbox";

import { TasksContainer } from "./pages/tasks/TasksContainer";

const MenuLink = props => (
  <NavLink {...props} activeStyle={{ backgroundColor: "gray" }} />
);

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <MenuLink to="/inbox">Inbox</MenuLink>
        <MenuLink to="/tasks">Task List</MenuLink>
      </div>

      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/inbox">
          <ConnectedInboxPage />
        </Route>
        <Route path="/tasks">
          <TasksContainer />
        </Route>
        <Route>Page was not found</Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
