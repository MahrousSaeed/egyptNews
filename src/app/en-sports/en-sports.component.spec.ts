import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnSportsComponent } from './en-sports.component';

describe('EnSportsComponent', () => {
  let component: EnSportsComponent;
  let fixture: ComponentFixture<EnSportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnSportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
