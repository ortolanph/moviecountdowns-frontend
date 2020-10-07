import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CountDownCardPanelComponent} from './count-down-card-panel.component';

describe('CountDownCardPanelComponent', () => {
  let component: CountDownCardPanelComponent;
  let fixture: ComponentFixture<CountDownCardPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownCardPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownCardPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
