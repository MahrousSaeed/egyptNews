import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaSportsComponent } from './sa-sports.component';

describe('SaSportsComponent', () => {
  let component: SaSportsComponent;
  let fixture: ComponentFixture<SaSportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaSportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
