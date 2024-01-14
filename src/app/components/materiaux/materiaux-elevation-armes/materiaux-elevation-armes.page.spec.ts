import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MateriauxElevationArmesPage } from './materiaux-elevation-armes.page';

describe('MateriauxElevationArmesPage', () => {
  let component: MateriauxElevationArmesPage;
  let fixture: ComponentFixture<MateriauxElevationArmesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MateriauxElevationArmesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
