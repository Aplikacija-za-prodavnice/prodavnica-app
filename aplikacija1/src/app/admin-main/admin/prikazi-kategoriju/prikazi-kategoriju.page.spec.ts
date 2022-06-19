import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrikaziKategorijuPage } from './prikazi-kategoriju.page';

describe('PrikaziKategorijuPage', () => {
  let component: PrikaziKategorijuPage;
  let fixture: ComponentFixture<PrikaziKategorijuPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikaziKategorijuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrikaziKategorijuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
