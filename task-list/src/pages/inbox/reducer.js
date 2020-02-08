const Actions = {
  LOAD_TASKS: "Inbox/LOAD",
  SET_LOADING: "Inbox/SET_LOADDING",
  ADD_TASK: "Inbox/ADD",
  DELETE_TASK: "Inbox/DELETE"
};

export function taskLoaded(tasks) {
  return {
    type: Actions.LOAD_TASKS,
    payload: { tasks }
  };
}

function setLoading(isLoading) {
  return {
    type: Actions.SET_LOADING,
    payload: { isLoading }
  };
}

function taskAdded(task) {
  return {
    type: Actions.ADD_TASK,
    payload: task
  };
}

function taskDelete(taskId) {
  return {
    type: Actions.DELETE_TASK,
    payload: {
      taskId
    }
  };
}

const idGenerate = () => Number(new Date()).toString(16);

export const loadTasks = () => async (dispatch, getState, api) => {
  const tasks = await api.inboxService.load();

  dispatch(taskLoaded(tasks));
};

export const addTask = task => async (dispatch, getState, api) => {
  setLoading(true);

  try {
    const taskWithId = await api.inboxService.add(task);

    dispatch(taskAdded(taskWithId));
  } catch {
    setLoading(false);
  }
};

export const deleteTask = taskId => async (dispatch, getState, api) => {
  dispatch(setLoading(true));

  try {
    await api.inboxService.delete(taskId);

    dispatch(taskDelete(taskId));
  } catch {
    dispatch(setLoading(false));
  }
};

export function taskReducer(state = { isLoading: true, taskList: [] }, action) {
  switch (action.type) {
    case Actions.ADD_TASK: {
      const task = { ...action.payload };

      task.id = idGenerate();

      return {
        ...state,
        taskList: [...state.taskList, task],
        isLoading: false
      };
    }

    case Actions.DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter(
          task => task.id !== action.payload.taskId
        ),
        isLoading: false
      };

    case Actions.LOAD_TASKS:
      return {
        isLoading: false,
        taskList: action.payload.tasks
      };

    case Actions.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading
      };

    default:
      return state;
  }
}
