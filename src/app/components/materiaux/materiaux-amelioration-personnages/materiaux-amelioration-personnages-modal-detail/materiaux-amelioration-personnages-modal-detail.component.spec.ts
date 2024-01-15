import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MateriauxAmeliorationPersonnagesModalDetailComponent } from './materiaux-amelioration-personnages-modal-detail.component';

describe('MateriauxAmeliorationPersonnagesModalDetailComponent', () => {
  let component: MateriauxAmeliorationPersonnagesModalDetailComponent;
  let fixture: ComponentFixture<MateriauxAmeliorationPersonnagesModalDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriauxAmeliorationPersonnagesModalDetailComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MateriauxAmeliorationPersonnagesModalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
