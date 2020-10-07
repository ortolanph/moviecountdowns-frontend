import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CountDownPanelComponent} from './count-down-panel.component';

describe('CountDownPanelComponent', () => {
  let component: CountDownPanelComponent;
  let fixture: ComponentFixture<CountDownPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
