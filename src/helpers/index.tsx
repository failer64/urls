import { SortType, TableParams } from "../components/ContentPage";
import { API_BASE_URL } from "../api";

export async function fetchWithAuth(url: string, options: any) {
  let tokenData = null; // объявляем локальную переменную tokenData

  if (sessionStorage.authToken) {
    // если в sessionStorage присутствует tokenData, то берем её
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

export async function fetchData(order: SortType[], tableParams: TableParams) {
  const paramsForOrder = order.map((item, i) =>
    i !== order.length - 1 ? "order=" + item + "&" : "order=" + item
  );
  const response = await fetchWithAuth(
    API_BASE_URL +
      `statistics?${paramsForOrder}&offset=${
        ((tableParams.pagination.current ?? 0) - 1) *
        (tableParams.pagination.pageSize ?? 10)
      }&limit=${tableParams.pagination.pageSize}`,
    {}
  );
  return response;
}
