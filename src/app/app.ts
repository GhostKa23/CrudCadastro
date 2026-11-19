import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  email: string = 'Maria@email.com';
  cidade: string = 'São Paulo';

  restaurarDados(): void {
    this.nome = 'Maria Silva';
    this.idade = 18;
    this.curso = 'Informática';
    this.email = 'Maria@email.com';
    this.cidade = 'São Paulo';
  }
  onSubmit() {
  console.log('Formulário enviado sem recarregar a página!');
}
}
