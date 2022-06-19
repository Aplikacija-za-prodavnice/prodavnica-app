import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DodajProdavnicuPage } from './dodaj-prodavnicu.page';

describe('DodajProdavnicuPage', () => {
  let component: DodajProdavnicuPage;
  let fixture: ComponentFixture<DodajProdavnicuPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajProdavnicuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DodajProdavnicuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
