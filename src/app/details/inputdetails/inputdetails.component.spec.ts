import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputdetailsComponent } from './inputdetails.component';

describe('InputdetailsComponent', () => {
  let component: InputdetailsComponent;
  let fixture: ComponentFixture<InputdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
