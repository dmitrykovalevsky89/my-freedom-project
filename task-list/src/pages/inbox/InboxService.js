const INBOX_URL = `https://jsonbox.io/box_649ae0faa930c4682445`;
// `https://jsonplaceholder.typicode.com/users`
// change url to jsonbox.io - подготовить список задач в этот box

export class InboxService {
  async _makeRequest(url, method = "GET", body) {
    const params = { method };

    if (body) {
      params.body = JSON.stringify(body);
      params.headers = {
        "content-type": "application/json"
      };
    }

    const response = await fetch(url, params);

    if (!response.ok) {
      throw new Error("request error");
    }

    if (
      response.headers.has("content-type") &&
      response.headers.get("content-type").startsWith("application/json")
    ) {
      const data = await response.json();
      return data;
    }
  }

  load() {
    return this._makeRequest(INBOX_URL);
  }

  add(task) {
    return this._makeRequest(INBOX_URL, "POST", task);
  }

  delete(taskId) {
    return this._makeRequest(`${INBOX_URL}/${taskId}`, "DELETE");
  }
}
