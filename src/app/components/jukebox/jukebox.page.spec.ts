import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JukeboxPage } from './jukebox.page';

describe('JukeboxPage', () => {
  let component: JukeboxPage;
  let fixture: ComponentFixture<JukeboxPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JukeboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
