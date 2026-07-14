import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addstd } from './addstd';

describe('Addstd', () => {
  let component: Addstd;
  let fixture: ComponentFixture<Addstd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addstd],
    }).compileComponents();

    fixture = TestBed.createComponent(Addstd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
