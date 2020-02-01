class UnexpectedReponseError extends Error {}

const CONTENT_TYPE_HEADER = "content-type";
const JSON_MIME_TYPE = "application/json";

export async function makeRequest(url, method = "GET", body = undefined) {
  // собираем params + метод (GET / POST / PUT / DELETE)
  const params = {
    method
  };

  // собираем params + тело и заголовки
  if (body) {
    params.body = JSON.stringify(body);
    params.headers = {
      [CONTENT_TYPE_HEADER]: JSON_MIME_TYPE
    };
  }

  // выпоняем запрос
  const response = await fetch(url, params); // передаем url данным и params

  // если респонс пришел не со статусом 200, то выводим ошибку
  if (!response.ok) {
    throw new UnexpectedReponseError("Unexpected response!");
  }

  // проверяем на валидность отданных данных (наличие content type и содержит JSON)
  if (
    response.headers.has(CONTENT_TYPE_HEADER) &&
    response.headers.get(CONTENT_TYPE_HEADER).startsWith(JSON_MIME_TYPE)
  ) {
    const dataJson = await response.json();

    return dataJson; // возвращаем данные
  }
}
