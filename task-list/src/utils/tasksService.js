import { makeRequest } from "./makeRequest";
import { ServerUrls } from "./ServerUrls";

// полцчить страницу с таском
const getTaskUrl = id => `${ServerUrls.TASKS}/${id}`;

// запрос на все таски
export function getAllTasks() {
  return makeRequest(ServerUrls.TASKS); // GET
}

// добавление таски
export function addTask(task) {
  return makeRequest(ServerUrls.TASKS, "POST", task);
}

// удаление таски
export function deleteTask(idTask) {
  return makeRequest(getTaskUrl(idTask), "DELETE");
}

// обновление таски
export function updateTask(task) {
  return makeRequest(getTaskUrl(task._id), "PUT", task);
}
