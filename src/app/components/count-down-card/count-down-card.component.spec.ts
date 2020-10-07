import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CountDownCardComponent} from './count-down-card.component';

describe('CountDownCardComponent', () => {
  let component: CountDownCardComponent;
  let fixture: ComponentFixture<CountDownCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
