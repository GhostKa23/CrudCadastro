import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    localStorage.clear();
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

  it('gravarDados deve guardar o cadastro e mantê-lo após recriar o app', () => {
    const app = TestBed.createComponent(App).componentInstance;
    app.nome = 'João Oliveira';
    app.gravarDados();
    expect(app.alunoGravado?.nome).toBe('João Oliveira');

    const outro = TestBed.createComponent(App).componentInstance;
    expect(outro.alunoGravado?.nome).toBe('João Oliveira');
  });

  it('restaurarDados deve voltar ao cadastro gravado sem apagá-lo', () => {
    const app = TestBed.createComponent(App).componentInstance;
    app.nome = 'João Oliveira';
    app.idade = 20;
    app.gravarDados();
    app.nome = 'Outro Nome';
    app.idade = 30;
    app.restaurarDados();
    expect(app.nome).toBe('João Oliveira');
    expect(app.idade).toBe(20);
    expect(app.alunoGravado?.nome).toBe('João Oliveira');
    expect(localStorage.getItem('cadastroAluno')).not.toBeNull();
  });

  it('deve mostrar o cadastro gravado na tela', () => {
    const fixture = TestBed.createComponent(App);
    fixture.componentInstance.gravarDados();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#cadastro-gravado').textContent).toContain('Maria Silva');
  });
});
