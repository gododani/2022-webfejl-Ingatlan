import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() onCloseSidenav: EventEmitter<boolean>= new EventEmitter();
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  @Input() currentPage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  menuSwitch(){
    this.selectedPage.emit(this.currentPage);
  }

  close(){
    this.onCloseSidenav.emit(true);
  }
}
