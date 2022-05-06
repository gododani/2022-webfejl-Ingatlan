import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-successul-comment',
  templateUrl: './successul-comment.component.html',
  styleUrls: ['./successul-comment.component.scss']
})
export class SuccessulCommentComponent implements OnInit {

  userId: string = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: any) =>{
      this.userId = param.userId as string;
    });
  }

}
