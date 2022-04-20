import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareProductsMainComponent } from './compare-products-main.component';

describe('CompareProductsMainComponent', () => {
  let component: CompareProductsMainComponent;
  let fixture: ComponentFixture<CompareProductsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareProductsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareProductsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
