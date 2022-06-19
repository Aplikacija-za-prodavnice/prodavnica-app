import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IzmeniProdavnicePage } from './izmeni-prodavnice.page';

describe('IzmeniProdavnicePage', () => {
  let component: IzmeniProdavnicePage;
  let fixture: ComponentFixture<IzmeniProdavnicePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmeniProdavnicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IzmeniProdavnicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
