import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrikaziPersonalizovanuKategorijuPage } from './prikazi-personalizovanu-kategoriju.page';

describe('PrikaziPersonalizovanuKategorijuPage', () => {
  let component: PrikaziPersonalizovanuKategorijuPage;
  let fixture: ComponentFixture<PrikaziPersonalizovanuKategorijuPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikaziPersonalizovanuKategorijuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrikaziPersonalizovanuKategorijuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
