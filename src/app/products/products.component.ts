import {AfterViewInit, Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {pageable_data_dto_v1, products_data_dto_v1} from "./products-data-dto";
import {PaginatedDataResponse} from "./products-data-dto";
import {ProductsDataService} from "./products-data.service";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements AfterViewInit{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  data: products_data_dto_v1[] = [];
  recordsTotal = 0;
  pageable: pageable_data_dto_v1[] = []

  constructor(
    private dataService: ProductsDataService,
    private fb: FormBuilder,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {
    this.carForm = this.fb.group({
      fio: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      carType: ['', Validators.required],
      carNumber: ['', Validators.required],
      carColor: ['', Validators.required]
    });
  }

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

  onSubmit() {
    if (this.carForm.valid) {
      const accessToken = localStorage.getItem('access_token');

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      });

      this.http.post('http://localhost:8761/products', this.carForm.value, { headers })
        .subscribe(response => {
          console.log('Success:', response);
          this.loadData(0, 10, '');
        }, error => {
          console.error('Error:', error);
        });
    }
  }

  carForm: FormGroup;
  carTypeGroups = [
    {
      name: 'CHEVROLET',
      pokemon: [
        {value: '001', viewValue: 'Cobalt'},
        {value: '002', viewValue: 'Matiz'},
        {value: '003', viewValue: 'Tracker'},
      ],
    }
  ];

  ngAfterViewInit(): void {
  }
}
