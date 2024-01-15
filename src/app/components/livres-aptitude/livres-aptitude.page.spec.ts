import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LivresAptitudePage } from './livres-aptitude.page';

describe('LivresAptitudePage', () => {
  let component: LivresAptitudePage;
  let fixture: ComponentFixture<LivresAptitudePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LivresAptitudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
