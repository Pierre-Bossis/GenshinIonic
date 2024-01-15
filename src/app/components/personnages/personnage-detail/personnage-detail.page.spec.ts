import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonnageDetailPage } from './personnage-detail.page';

describe('PersonnageDetailPage', () => {
  let component: PersonnageDetailPage;
  let fixture: ComponentFixture<PersonnageDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonnageDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
