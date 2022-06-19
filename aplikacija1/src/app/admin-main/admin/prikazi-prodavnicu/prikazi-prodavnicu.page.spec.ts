import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrikaziProdavnicuPage } from './prikazi-prodavnicu.page';

describe('PrikaziProdavnicuPage', () => {
  let component: PrikaziProdavnicuPage;
  let fixture: ComponentFixture<PrikaziProdavnicuPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikaziProdavnicuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrikaziProdavnicuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
