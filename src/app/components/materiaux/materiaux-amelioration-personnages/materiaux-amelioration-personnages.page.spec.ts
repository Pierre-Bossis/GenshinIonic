import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MateriauxAmeliorationPersonnagesPage } from './materiaux-amelioration-personnages.page';

describe('MateriauxAmeliorationPersonnagesPage', () => {
  let component: MateriauxAmeliorationPersonnagesPage;
  let fixture: ComponentFixture<MateriauxAmeliorationPersonnagesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MateriauxAmeliorationPersonnagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
