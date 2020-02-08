import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { InboxList } from "./InboxList";
import { addTask, deleteTask, loadTasks } from "./reducer";
import { InboxAddForm } from "./InboxAddForm";
import { Route, withRouter } from "react-router-dom";

export { taskReducer } from "./reducer";
export { ConnectedInboxAddForm } from "./InboxAddForm";

class InboxPage extends React.Component {
  componentDidMount() {
    this.props.load();
  }

  render() {
    const { tasks, isLoading, onAdd, onRemove } = this.props;

    if (isLoading) {
      return "...Loading...";
    }

    return (
      <>
        <Route exact path="/inbox">
          <InboxList
            tasks={tasks}
            isLoading={isLoading}
            onAddTask={onAdd}
            onRemoveTask={onRemove}
          />
        </Route>
        <Route path="/inbox/add">
          <InboxAddForm onSave={onAdd} />
        </Route>
      </>
    );
  }
}

export const ConnectedInboxPage = connect(
  state => ({ tasks: state.tasks.taskList, isLoading: state.tasks.isLoading }),

  dispatch =>
    bindActionCreators(
      {
        onAdd: addTask,
        onRemove: deleteTask,
        load: loadTasks
      },
      dispatch
    )
)(InboxPage);

export const ConnectedInboxList = connect(
  state => ({ tasks: state.tasks }),

  dispatch =>
    bindActionCreators(
      {
        onAddTask: addTask,
        onRemoveTask: deleteTask
      },
      dispatch
    )
)(InboxList);
