import {Component, ViewChild} from '@angular/core';
import {dashboard_data_dto_v1, PaginatedDataResponse} from "./dashboard-data-dto";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {DashboardDataService} from "./dashboard-data-service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  data: dashboard_data_dto_v1[] = [];
  recordsTotal = 0;
  currentPage = 0;

  constructor(private dataService: DashboardDataService) {}

  ngOnInit(): void {
    this.loadData(0, 10); // загрузка первой страницы с размером страницы 10
  }

  loadData(page: number, size: number) {
    this.dataService.getPaginatedData(page, size)
      .subscribe((response: PaginatedDataResponse) => {
        this.data = response.data;
        this.recordsTotal = response.recordsTotal;
        this.currentPage = response.currentPage;
      });
  }

  onPageChange(event: any) {
    const newPage = event.pageIndex; // Новый индекс страницы
    const newSize = event.pageSize; // Новый размер страницы
    this.loadData(newPage, newSize); // Загрузка данных для новой страницы и размера страницы
  }
}
