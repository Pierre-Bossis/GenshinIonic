import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MateriauxElevationArmesModalDetailComponent } from './materiaux-elevation-armes-modal-detail.component';

describe('MateriauxElevationArmesModalDetailComponent', () => {
  let component: MateriauxElevationArmesModalDetailComponent;
  let fixture: ComponentFixture<MateriauxElevationArmesModalDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriauxElevationArmesModalDetailComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MateriauxElevationArmesModalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
