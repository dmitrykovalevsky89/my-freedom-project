import React from "react";
import { NavLink } from "react-router-dom";
// import { InboxAddForm } from "./InboxAddForm";

// function addTask(tasks, taskToAdd) {
//   return [...tasks, taskToAdd];
// }

// export class InboxList extends React.Component {
//   state = {
//     inboxTasks: [
//       {
//         id: "ads46rgvdu5",
//         title: "Получить диплом",
//         description: "Отучившись в университете, получу диплом",
//         createdOn: "2020, 25 января, 21:47",
//         userId: 1,
//         projectId: null,
//         isDone: false,
//         isFocusedOn: false
//       }
//     ],
//     shouldShowForm: null
//   };
//
//   idGenerate = () => Number(new Date()).toString(16);
//
//   addTasks = () => {
//     this.setState({
//       shouldShowForm: true
//     });
//   };
//
//   render() {
//     if (this.state.shouldShowForm) {
//       return (
//         <InboxAddForm
//           onSave={(taskTitle, taskDesc, taskCreatedOn) => {
//             const inboxTask = {
//               id: this.idGenerate(),
//               title: taskTitle,
//               description: taskDesc,
//               createdOn: taskCreatedOn
//             };
//
//             this.setState({
//               inboxTasks: addTask(this.state.inboxTasks, inboxTask),
//               shouldShowForm: null
//             });
//           }}
//           onCancel={() =>
//             this.setState({
//               shouldShowForm: null
//             })
//           }
//         />
//       );
//     } else if (this.state.inboxTasks) {
//       return (
//         <>
//           <button onClick={() => this.addTasks()}>New task</button>
//           <ul>
//             {this.state.inboxTasks.map(task => (
//               <li key={task.id}>
//                 <input id={task.id} type="checkbox" />
//                 {task.title}
//                 <br />
//                 {task.description}
//                 <br />
//                 Task id: {task.id}
//                 <br />
//                 Create: {task.createdOn}
//               </li>
//             ))}
//           </ul>
//         </>
//       );
//     }
//
//     return (
//         <button onClick={() => this.addTasks()}>New task</button>
//     );
//   }
// }

export class InboxList extends React.Component {
  state = {
    inboxTasks: [
      {
        id: "ads46rgvdu5",
        title: "Получить диплом",
        description: "Отучившись в университете, получу диплом",
        createdOn: "2020, 25 января, 21:47",
        userId: 1,
        projectId: null,
        isDone: false,
        isFocusedOn: false
      }
    ],
    shouldShowForm: null
  };

  render() {
    const { tasks, onRemoveTask } = this.props;

    return (
      <>
        <NavLink to="/inbox/add">Add user</NavLink>
        {/*<button onClick={() => this.addTasks()}>New task</button>*/}
        <ul>
          {this.state.inboxTasks.map(task => (
            <li key={task.id}>
              <input id={task.id} type="checkbox" />
              {task.title}
              <br />
              {task.description}
              <br />
              Task id: {task.id}
              <br />
              Create: {task.createdOn}
              <br />
              <button onClick={() => onRemoveTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
