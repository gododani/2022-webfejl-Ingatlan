import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Image } from '../../../shared/models/Image';
import { Comment } from '../../../shared/models/Comment';
import { IngatlansService } from '../../../shared/services/ingatlans.service';
import { CommentService } from '../..//../shared/services/comment.service';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/models/User';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})

export class ViewerComponent implements OnInit, OnChanges {

  @Input() ingatlanInput?: Image;
  loadedImage?: string;
  comments: Array<Comment> = [];
  user?: User;

  commentsForm = this.createform({
    id: '',
    username: '',
    comment: '',
    date: 0,
    ingatlanId: this.ingatlanInput?.id
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private ingatlansService: IngatlansService, private commentService: CommentService, private userService: UserService) { }

  sortData(sort: Sort) {
    const data = this.comments.slice();
    if (!sort.active || sort.direction === '') {
      this.comments = data;
      return;
    }
    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    this.comments = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'user':
          return compare(a.username, b.username, isAsc);
        case 'comment':
          return compare(a.comment, b.comment, isAsc);
        case 'date':
          return compare(a.date, b.date, isAsc);
        default:
          return 0;
      }
    });
  }

  ngOnChanges(){
    if(this.ingatlanInput?.id){
      this.commentsForm.get('ingatlanId')?.setValue(this.ingatlanInput.id);
      this.ingatlansService.loadImage(this.ingatlanInput.image_url).subscribe(data => {
        this.loadedImage = data;
      });
      this.commentService.getCommentsByIngatlanId(this.ingatlanInput.id).subscribe(comments => {
        this.comments = comments;
      });
    }
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
      this.commentsForm.get('username')?.setValue(this.user?.username);
    }, error => {
        console.error(error);
    });
  }

  createform(model: Comment){
    let formGroup = this.formBuilder.group(model);
    formGroup.get('username')?.addValidators([Validators.required]);
    formGroup.get('comment')?.addValidators([Validators.required, Validators.minLength(5)]);
    return formGroup;
  }

  addComment(){
    if(this.commentsForm.valid){
      if(this.commentsForm.get('username') && this.commentsForm.get('comment')){
        this.commentsForm.get('date')?.setValue(new Date().getTime());
        this.commentService.create(this.commentsForm.value).then(_ => {
          this.router.navigateByUrl('/ingatlans/successful-comment/' + this.commentsForm.get('username')?.value);
        }).catch(error => {
          console.log(error);
        })
       }
    }
  }

  updateComment(username: string, comment: Comment){
    if(this.commentsForm.get('username')?.value === username){
      this.commentService.update(comment);
    }
  }

  deleteComment(id: string, username: string){
    if(this.commentsForm.get('username')?.value === username){
      this.commentService.delete(id);
    }
  }
}