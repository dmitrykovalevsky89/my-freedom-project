import React from "react";
// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter,
  Route,
  NavLink,
  Redirect,
  Switch
} from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import { InboxList } from "./pages/inbox/InboxList";
import { TasksContainer } from "./pages/tasks/TasksContainer";

const MenuLink = props => (
  <NavLink {...props} activeStyle={{ backgroundColor: "gray" }} />
);

const App = () => (
  <BrowserRouter>
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <MenuLink to="/">Main page</MenuLink>
      <MenuLink to="/inbox">Inbox</MenuLink>
      <MenuLink to="/tasks">Task List</MenuLink>
    </div>

    <Switch>
      <Route path="/inbox" render={() => <InboxList />} />
      <Route path="/tasks" render={() => <TasksContainer />} />
      <Route path="/" render={() => <MainPage />} />
      <Route>Not found</Route>
    </Switch>
  </BrowserRouter>
);

export default App;
