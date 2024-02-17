import { Pagination, SortType } from "../components/ContentPage";
import { API_BASE_URL } from "../api";

interface Options {
  method?: string;
  headers?: {
    Authorization?: string;
    "Content-Type"?: string;
    accept?: string;
  };
}

export async function fetchWithAuth(url: string, options: Options) {
  let tokenData = null; // объявляем локальную переменную tokenData

  if (sessionStorage.authToken) {
    // если в sessionStorage присутствует tokenData, то берем его
    tokenData = JSON.parse(sessionStorage.authToken);
  }

  if (!options.headers) {
    // если в запросе отсутствует headers, то задаем их
    options.headers = {};
  }

  if (tokenData) {
    options.headers.Authorization = `Bearer ${tokenData.access_token}`; // добавляем токен в headers запроса
  }

  return fetch(url, options); // возвращаем изначальную функцию, но уже с валидным токеном в headers
}

export async function fetchData(order: SortType[], pagination: Pagination) {
  const paramsForOrder = order.map((item, i) =>
    i !== order.length - 1 ? "order=" + item + "&" : "order=" + item
  );
  const response = await fetchWithAuth(
    API_BASE_URL +
      `statistics?${paramsForOrder}&offset=${
        ((pagination.current ?? 0) - 1) * (pagination.pageSize ?? 10)
      }&limit=${pagination.pageSize}`,
    {}
  );
  return response;
}
