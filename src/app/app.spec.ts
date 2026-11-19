import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('deve criar o app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('restaurarDados deve voltar aos valores iniciais', () => {
    const app = TestBed.createComponent(App).componentInstance;
    app.nome = 'João Oliveira';
    app.idade = 20;
    app.restaurarDados();
    expect(app.nome).toBe('Maria Silva');
    expect(app.idade).toBe(18);
  });
});
