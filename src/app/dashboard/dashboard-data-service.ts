import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import {PaginatedDataResponse} from "./dashboard-data-dto";

@Injectable({
  providedIn: "root"
})
export class DashboardDataService {

  constructor(private http: HttpClient) {
  }

  getPaginatedData(page: number, size: number): Observable<PaginatedDataResponse> {
    return this.http.get<any>(`http://192.168.224.18:8080/list_cars?page=${page}&size=${size}`)
      .pipe(
        map(response => ({
          data: response.data,
          recordsTotal: response.recordsTotal,
          currentPage: response.currentPage
        }))
      );
  }
}
