import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArmesPage } from './armes.page';

describe('ArmesPage', () => {
  let component: ArmesPage;
  let fixture: ComponentFixture<ArmesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArmesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
