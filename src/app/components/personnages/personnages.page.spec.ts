import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonnagesPage } from './personnages.page';

describe('PersonnagesPage', () => {
  let component: PersonnagesPage;
  let fixture: ComponentFixture<PersonnagesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonnagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
