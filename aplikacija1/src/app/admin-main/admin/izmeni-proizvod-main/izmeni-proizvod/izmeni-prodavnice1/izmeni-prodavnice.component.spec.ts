import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IzmeniProdavniceComponent } from './izmeni-prodavnice.component';

describe('IzmeniProdavniceComponent', () => {
  let component: IzmeniProdavniceComponent;
  let fixture: ComponentFixture<IzmeniProdavniceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmeniProdavniceComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IzmeniProdavniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
