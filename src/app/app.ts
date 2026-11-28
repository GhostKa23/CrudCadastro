import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Aluno {
  nome: string;
  idade: number;
  curso: string;
  email: string;
  cidade: string;
}

const CHAVE_STORAGE = 'cadastroAluno';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  nome: string = 'Maria Silva';
  idade: number = 18;
  curso: string = 'Informática';
  email: string = 'maria@email.com';
  cidade: string = 'São Paulo';

  // Cadastro gravado: continua na tela (e após recarregar); gravar de novo sobrescreve
  alunoGravado: Aluno | null = this.lerGravado();

  gravarDados(): void {
    this.alunoGravado = {
      nome: this.nome,
      idade: this.idade,
      curso: this.curso,
      email: this.email,
      cidade: this.cidade,
    };
    try {
      localStorage.setItem(CHAVE_STORAGE, JSON.stringify(this.alunoGravado));
    } catch {
      // armazenamento indisponível: o cadastro fica salvo apenas enquanto a página estiver aberta
    }
  }

  private lerGravado(): Aluno | null {
    try {
      const salvo = localStorage.getItem(CHAVE_STORAGE);
      return salvo ? (JSON.parse(salvo) as Aluno) : null;
    } catch {
      return null;
    }
  }

  restaurarDados(): void {
    // Se há cadastro gravado, o formulário volta para ele; senão, para os valores iniciais
    const base: Aluno = this.alunoGravado ?? {
      nome: 'Maria Silva',
      idade: 18,
      curso: 'Informática',
      email: 'maria@email.com',
      cidade: 'São Paulo',
    };
    this.nome = base.nome;
    this.idade = base.idade;
    this.curso = base.curso;
    this.email = base.email;
    this.cidade = base.cidade;
  }
}
