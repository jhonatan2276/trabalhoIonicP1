import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDetalhePage } from './usuario-detalhe.page';

describe('UsuarioDetalhePage', () => {
  let component: UsuarioDetalhePage;
  let fixture: ComponentFixture<UsuarioDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioDetalhePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
