import {Component, HostListener, Input, OnInit} from '@angular/core';
import {languages, notifications, userItems} from './header-dummy-data';
import {DashboardComponent} from "../dashboard/dashboard.component";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay = false;
  selectedLanguage: any;

  languages = languages;
  notifications = notifications;
  userItems = userItems;

  constructor(private dashboardDataService: DashboardComponent) {}


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth)
  }

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth)
    this.selectedLanguage = this.languages[0];
  }

  getHeadClass(): string {
    return this.collapsed && this.screenWidth > 768 ? 'head-trimmed' : 'head-md-screen';
  }

  checkCanShowSearchAsOverlay(innerWidth: number): void {
    this.canShowSearchAsOverlay = innerWidth < 845;
  }

  searchParam: string = '';
  onSearchInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value; // Получаем значение поля ввода
    console.log("Input changed:", value);

    if (value.trim() !== '') {
      this.searchParam = value;
      console.log(111111)
    }
  }
}
