import {Component, EventEmitter, HostListener, OnInit, Output, Renderer2} from '@angular/core';
import {navbarData} from "./nav-data";
import {animate, animation, keyframes, style, transition, trigger} from "@angular/animations";


interface SideNavToggle {
    screenWidth: number;
    collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
            style({opacity: 1})
          )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter',
          animate('1000ms',
            keyframes([
              style({transform: 'rotate(0deg)', offset: '0'}),
              style({transform: 'rotate(2turn)', offset: '1'}),
            ])
          )
      )
    ])
  ]
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  constructor(private renderer: Renderer2) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    // this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.screenWidth = this.getScreenWidth();
    // this.screenWidth = window.innerWidth;
  }

  private getScreenWidth(): number {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 0; // Default value if window is not available
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth
    })
  }

  closeSidenav(): void {
    this.collapsed = false
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth
    })
  }
}
