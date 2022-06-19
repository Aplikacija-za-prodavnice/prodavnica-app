import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IzmeniProdavnicuPage } from './izmeni-prodavnicu.page';

describe('IzmeniProdavnicuPage', () => {
  let component: IzmeniProdavnicuPage;
  let fixture: ComponentFixture<IzmeniProdavnicuPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmeniProdavnicuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IzmeniProdavnicuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
