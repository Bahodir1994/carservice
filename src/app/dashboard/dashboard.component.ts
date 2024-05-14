import {Component} from '@angular/core';
import {dashboard_data_dto_v1, pageable_data_dto_v1, PaginatedDataResponse} from "./dashboard-data-dto";
import {DashboardDataService} from "./dashboard-data-service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  data: dashboard_data_dto_v1[] = [];
  recordsTotal = 0;
  pageable: pageable_data_dto_v1[] = []

  constructor(private dataService: DashboardDataService) {}

  ngOnInit(): void {
    this.loadData(0, 10, ''); // загрузка первой страницы с размером страницы 10
  }

  applyFilter(event: any) {
    const value = (event.target as HTMLInputElement).value; // Получаем значение поля ввода
    this.loadData(0, 10, value.trim().toLowerCase());
  }

  loadData(page: number, size: number, param: string) {
    this.dataService.getPaginatedData(page, size, param)
      .subscribe((response: PaginatedDataResponse) => {
        this.data = response.data;
        this.recordsTotal = response.totalElements;
        this.pageable = response.pageable;
      });
  }

  onPageChange(event: any, searchParam: string) {
    const newPage = event.pageIndex; // Новый индекс страницы
    const newSize = event.pageSize; // Новый размер страницы
    this.loadData(newPage, newSize, searchParam); // Загрузка данных для новой страницы и размера страницы
  }
}
