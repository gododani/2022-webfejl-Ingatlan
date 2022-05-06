import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {

  @Input() ingatlanObjectInput?: Array<any>;
  @Output() ingatlanObjectEmitter: EventEmitter<any> = new EventEmitter();
  chosenIngatlan: any;

  constructor() { 
  }

  ngOnChanges(){
    if(this.ingatlanObjectInput){
      this.chosenIngatlan = this.ingatlanObjectInput[0];
      this.reload();
    }
  }

  ngOnInit(): void { }

  reload(){
    this.ingatlanObjectEmitter.emit(this.chosenIngatlan)
  }
  
}
