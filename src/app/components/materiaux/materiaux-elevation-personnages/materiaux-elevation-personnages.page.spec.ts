import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MateriauxElevationPersonnagesPage } from './materiaux-elevation-personnages.page';

describe('MateriauxElevationPersonnagesPage', () => {
  let component: MateriauxElevationPersonnagesPage;
  let fixture: ComponentFixture<MateriauxElevationPersonnagesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MateriauxElevationPersonnagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
