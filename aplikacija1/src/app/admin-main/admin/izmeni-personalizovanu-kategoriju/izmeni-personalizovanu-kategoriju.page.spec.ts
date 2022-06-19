import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IzmeniPersonalizovanuKategorijuPage } from './izmeni-personalizovanu-kategoriju.page';

describe('IzmeniPersonalizovanuKategorijuPage', () => {
  let component: IzmeniPersonalizovanuKategorijuPage;
  let fixture: ComponentFixture<IzmeniPersonalizovanuKategorijuPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmeniPersonalizovanuKategorijuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IzmeniPersonalizovanuKategorijuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
