import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalizovaneKategorijePage } from './personalizovane-kategorije.page';

describe('PersonalizovaneKategorijePage', () => {
  let component: PersonalizovaneKategorijePage;
  let fixture: ComponentFixture<PersonalizovaneKategorijePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizovaneKategorijePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalizovaneKategorijePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
