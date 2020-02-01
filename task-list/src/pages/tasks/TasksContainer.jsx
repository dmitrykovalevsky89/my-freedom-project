import React from "react";
import { getAllTasks, addTask, updateTask, deleteTask } from "../../utils/tasksService";
import { Loader } from "../../components/Loader";
import { ErrorMessage } from "../../components/ErrorMessage";
import { TasksList } from "./TasksList";

export class TasksContainer extends React.Component {
  state = {
    tasks: null,
    isLoading: true,
    isError: false,
    taskEdit: null
  };

  performAction = async fnc => {
    this.setState({ isLoading: true });

    try {
      await fnc();
    } catch (e) {
      this.setState({
        isLoading: false,
        isError: true
      });
    }
  };

  async componentDidMount() {
    try {
      const tasks = await getAllTasks();

      this.setState({
        tasks,
        isLoading: false
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        isError: true
      });
    }
  }

  changeChecked = async task => {
    this.performAction(async () => {
      await updateTask(task);
      const index = this.state.tasks.findIndex(i => i._id === task._id);
      const tasks = [
        ...this.state.tasks.slice(0, index),
        task,
        ...this.state.tasks.slice(index + 1)
      ];

      this.setState({
        tasks,
        isLoading: false
      })
    });
  };

  // saveChange = () => {
  //
  // };

  render() {
    if (this.state.isError) {
      return <ErrorMessage />;
    }

    return (
      <>
        {this.state.isLoading && <Loader />}
        {this.state.tasks && (
          <TasksList
            tasks={this.state.tasks}
            onChange={this.changeChecked}
            // onSaveChange={this.saveChange}
          />
          )}
      </>
    );
  }
}
