import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  @Input() currentPage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  menuSwitch(){
    this.selectedPage.emit(this.currentPage);
  }

}
