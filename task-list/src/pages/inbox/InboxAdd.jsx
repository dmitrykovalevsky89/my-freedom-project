import React from "react";

export class InboxAdd extends React.Component {
  state = {
    title: "",
    description: "",
    createdOn: "",
    userId: "",
    projectId: null,
    isDone: false,
    isFocusedOn: false
  };

  dateCreate = () => Date.now().toString();

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
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
        <input
          type="text"
          value={this.state.description}
          onChange={e =>
            this.setState({
              description: e.target.value
            })
          }
        />
        <br />
        <button
          onClick={() => {
            if (
              this.state.title &&
              this.state.title.trim() &&
              this.state.description &&
              this.state.description.trim()
            ) {
              this.props.onSave(
                this.state.title,
                this.state.description,
                this.dateCreate()
              );
              this.setState({ name: "", phone: "", createdOn: "null" });
            }
          }}
        >
          Add
        </button>
        <button onClick={() => this.props.onCancel()}>Cancel</button>
      </form>
    );
  }
}
