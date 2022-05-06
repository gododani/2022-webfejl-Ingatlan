import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Image } from '../../../shared/models/Image';
import { Comment } from '../../../shared/models/Comment';
import { IngatlansService } from '../../../shared/services/ingatlans.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnChanges {

  @Input() ingatlanInput?: Image;
  loadedImage?: string;

  comments: Array<Comment> = [];

  commentsForm = this.createform({
    username: '',
    comment: '',
    date: new Date()
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private ingatlansService: IngatlansService) { }

  ngOnChanges(){
    if(this.ingatlanInput?.id){
      this.ingatlansService.loadImage(this.ingatlanInput?.id + '.jpg').subscribe(data => {
        let reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onloadend = () => {
          this.loadedImage = reader.result as string;
        }
      });
    }
  }

  ngOnInit(): void {}

  createform(model: Comment){
    let formGroup = this.formBuilder.group(model);
    formGroup.get('username')?.addValidators([Validators.required]);
    formGroup.get('comment')?.addValidators([Validators.required, Validators.minLength(5)]);
    return formGroup;
  }

  addComment(){
    if(this.commentsForm.valid){
      if(this.commentsForm.get('username') && this.commentsForm.get('comment')){
        this.commentsForm.get('date')?.setValue(new Date());
        this.comments.push({...this.commentsForm.value});
        this.router.navigateByUrl('/ingatlans/successful-comment/' + this.commentsForm.get('username')?.value);
      }
    }
  }
}
