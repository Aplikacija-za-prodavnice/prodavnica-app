import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMarketsComponent } from './select-markets.component';

describe('SelectMarketsComponent', () => {
  let component: SelectMarketsComponent;
  let fixture: ComponentFixture<SelectMarketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMarketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
