import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temporada1Component } from './temporada1.component';

describe('Temporada1Component', () => {
  let component: Temporada1Component;
  let fixture: ComponentFixture<Temporada1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Temporada1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Temporada1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
