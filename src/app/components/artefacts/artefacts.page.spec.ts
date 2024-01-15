import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtefactsPage } from './artefacts.page';

describe('ArtefactsPage', () => {
  let component: ArtefactsPage;
  let fixture: ComponentFixture<ArtefactsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArtefactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
