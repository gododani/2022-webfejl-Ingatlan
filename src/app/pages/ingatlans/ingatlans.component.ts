import { Component, OnInit } from '@angular/core';
import { Image } from '../../shared/models/Image';
import { IngatlansService } from '../../shared/services/ingatlans.service';

@Component({
  selector: 'app-ingatlans',
  templateUrl: './ingatlans.component.html',
  styleUrls: ['./ingatlans.component.scss']
})
export class IngatlansComponent implements OnInit {

  ingatlanObject?: Array<Image>;
  chosenIngatlan: any;

  constructor(private ingatlanService: IngatlansService) { }

  ngOnInit(): void {
    this.ingatlanService.loadImageMeta('__credits.json').subscribe((data: Array<Image>) => {
      this.ingatlanObject = data;
    })
  }

  loadIngatlan(ingatlanObject: any){
    this.chosenIngatlan = ingatlanObject;
  }
}
