import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getstd } from './getstd';

describe('Getstd', () => {
  let component: Getstd;
  let fixture: ComponentFixture<Getstd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getstd],
    }).compileComponents();

    fixture = TestBed.createComponent(Getstd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
