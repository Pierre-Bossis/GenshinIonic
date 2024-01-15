import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MateriauxElevationPersonnagesModalDetailComponent } from './materiaux-elevation-personnages-modal-detail.component';

describe('MateriauxElevationPersonnagesModalDetailComponent', () => {
  let component: MateriauxElevationPersonnagesModalDetailComponent;
  let fixture: ComponentFixture<MateriauxElevationPersonnagesModalDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriauxElevationPersonnagesModalDetailComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MateriauxElevationPersonnagesModalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
