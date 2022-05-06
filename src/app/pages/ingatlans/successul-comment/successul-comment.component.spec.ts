import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessulCommentComponent } from './successul-comment.component';

describe('SuccessulCommentComponent', () => {
  let component: SuccessulCommentComponent;
  let fixture: ComponentFixture<SuccessulCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessulCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessulCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
