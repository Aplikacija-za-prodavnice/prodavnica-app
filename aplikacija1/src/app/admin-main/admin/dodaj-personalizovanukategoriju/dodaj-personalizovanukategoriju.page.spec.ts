import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DodajPersonalizovanukategorijuPage } from './dodaj-personalizovanukategoriju.page';

describe('DodajPersonalizovanukategorijuPage', () => {
  let component: DodajPersonalizovanukategorijuPage;
  let fixture: ComponentFixture<DodajPersonalizovanukategorijuPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajPersonalizovanukategorijuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DodajPersonalizovanukategorijuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
