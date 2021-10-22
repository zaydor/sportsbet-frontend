import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddscardComponent } from './oddscard.component';

describe('OddscardComponent', () => {
  let component: OddscardComponent;
  let fixture: ComponentFixture<OddscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OddscardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
