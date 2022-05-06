import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngatlanComponent } from './add-ingatlan.component';

describe('AddIngatlanComponent', () => {
  let component: AddIngatlanComponent;
  let fixture: ComponentFixture<AddIngatlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIngatlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIngatlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
