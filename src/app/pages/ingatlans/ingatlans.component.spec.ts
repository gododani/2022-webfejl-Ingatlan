import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngatlansComponent } from './ingatlans.component';

describe('IngatlansComponent', () => {
  let component: IngatlansComponent;
  let fixture: ComponentFixture<IngatlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngatlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngatlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
