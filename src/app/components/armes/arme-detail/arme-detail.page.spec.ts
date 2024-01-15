import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArmeDetailPage } from './arme-detail.page';

describe('ArmeDetailPage', () => {
  let component: ArmeDetailPage;
  let fixture: ComponentFixture<ArmeDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArmeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
