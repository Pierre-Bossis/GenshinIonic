import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalConstellationsAptitudesComponent } from './modal-constellations-aptitudes.component';

describe('ModalConstellationsAptitudesComponent', () => {
  let component: ModalConstellationsAptitudesComponent;
  let fixture: ComponentFixture<ModalConstellationsAptitudesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConstellationsAptitudesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalConstellationsAptitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
