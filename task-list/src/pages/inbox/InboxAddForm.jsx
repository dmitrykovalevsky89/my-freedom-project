import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addTask } from "./reducer";

export class InboxAddForm extends React.Component {
  state = {
    title: "",
    description: "",
    createdOn: "",
    userId: "",
    projectId: null,
    isDone: false,
    isFocusedOn: false
  };

  dateCreate = () => {
    const date = new Date();
    var options = {
      era: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
      timezone: "UTC",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    };
    const fullDate = date.toLocaleString("ru", options);

    return date.toString();
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onSave(this.state);
          this.setState({ title: "", description: "", createdOn: "null" });
        }}
      >
        <span>Name Task: </span>
        <input
          type="text"
          value={this.state.title}
          onChange={e =>
            this.setState({
              title: e.target.value
            })
          }
        />
        <br />
        <span>Description: </span>
        <textarea
          value={this.state.description}
          onChange={e =>
            this.setState({
              description: e.target.value
            })
          }
        >
          {this.state.description}
        </textarea>
        <br />
        <button type="submit">Add</button>
        {/*<button onClick={() => this.props.onCancel()}>Cancel</button>*/}
      </form>
    );
  }
}

export const ConnectedInboxAddForm = connect(
  state => ({}),
  dispatch => bindActionCreators({ onSave: addTask }, dispatch)
)(InboxAddForm);
