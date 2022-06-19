import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IzmeniPersonalizovanoComponent } from './izmeni-personalizovano.component';

describe('IzmeniPersonalizovanoComponent', () => {
  let component: IzmeniPersonalizovanoComponent;
  let fixture: ComponentFixture<IzmeniPersonalizovanoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmeniPersonalizovanoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IzmeniPersonalizovanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
