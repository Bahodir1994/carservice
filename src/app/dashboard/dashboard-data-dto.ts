export interface dashboard_data_dto_v1
{
  id: number;
  carNumber: string;
  createdDate: string;
  carModelCode: string;
  carColor: string;
}

export interface PaginatedDataResponse {
  data: dashboard_data_dto_v1[]; // Массив данных, который приходит от сервера
  recordsTotal: number; // Общее количество страниц
  currentPage: number; // Текущая страница
}
