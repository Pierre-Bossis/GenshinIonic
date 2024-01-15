import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MateriauxAmeliorationPersonnagesEtArmesPage } from './materiaux-amelioration-personnages-et-armes.page';

describe('MateriauxAmeliorationPersonnagesEtArmesPage', () => {
  let component: MateriauxAmeliorationPersonnagesEtArmesPage;
  let fixture: ComponentFixture<MateriauxAmeliorationPersonnagesEtArmesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MateriauxAmeliorationPersonnagesEtArmesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
