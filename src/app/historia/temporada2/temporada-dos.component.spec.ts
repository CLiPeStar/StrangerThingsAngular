import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temporal2Component } from './temporada-dos.component';

describe('Temporada2Component', () => {
  let component: Temporal2Component;
  let fixture: ComponentFixture<Temporal2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Temporal2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Temporal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
