import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IzmeniProizvodPage } from './izmeni-proizvod.page';

describe('IzmeniProizvodPage', () => {
  let component: IzmeniProizvodPage;
  let fixture: ComponentFixture<IzmeniProizvodPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmeniProizvodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IzmeniProizvodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
