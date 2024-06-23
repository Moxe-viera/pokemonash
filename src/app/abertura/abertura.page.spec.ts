import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AberturaPage } from './abertura.page';

describe('AberturaPage', () => {
  let component: AberturaPage;
  let fixture: ComponentFixture<AberturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AberturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
