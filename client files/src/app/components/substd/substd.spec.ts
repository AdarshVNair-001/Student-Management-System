import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Substd } from './substd';

describe('Substd', () => {
  let component: Substd;
  let fixture: ComponentFixture<Substd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Substd],
    }).compileComponents();

    fixture = TestBed.createComponent(Substd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
