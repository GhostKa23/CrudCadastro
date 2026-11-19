# Respostas dos testes — Cadastro de Alunos (One-Way e Two-Way Binding)

Observação: o projeto entregue está na versão final (Etapa 3, com Two-Way Binding).
Para refazer a Etapa 1, troque `[(ngModel)]="x"` por `[value]="x"` no `app.html`.

## Etapa 1 — One-Way Binding (`[value]`)

1. **Os campos apresentam os valores do TypeScript?** Sim. O `[value]` leva o valor da variável para o campo (TypeScript → HTML).
2. **Alterar o nome para João Oliveira no campo: o parágrafo muda?** Não. O parágrafo continua "Maria Silva", pois a variável `nome` não foi alterada.
3. **Alterar a idade para 20: a variável foi atualizada?** Não. A variável continua 18; só o campo visual mudou.
4. **Alterar `curso` no TypeScript:** o campo e o parágrafo exibem o novo valor após recarregar a aplicação.
5. **Por que o que é digitado não atualiza a variável?** O `[value]` é unidirecional: só envia dados do TypeScript para o HTML. Nada escuta o que o usuário digita para devolver à variável.

## Etapa 2 — Two-Way Binding (`[(ngModel)]`)

1. **Alterar o nome: o parágrafo atualiza?** Sim, imediatamente, a cada tecla digitada.
2. **Alterar idade e cidade: aparecem em "Dados do Aluno"?** Sim.
3. **Alterar `nome` no TypeScript: o campo mostra o novo valor?** Sim, após a atualização da aplicação o campo reflete o valor da variável.
4. **Apagar o campo Curso:** a variável `curso` passa a ser uma string vazia (`''`) e o texto "Curso:" no parágrafo fica sem valor.
5. **Diferença entre `[value]` e `[(ngModel)]`:** `[value]` é one-way (TypeScript → HTML). `[(ngModel)]` é two-way: equivale a `[ngModel]="x"` (variável → campo) somado a `(ngModelChange)="x = $event"` (campo → variável). Exige o `FormsModule`.

## Etapa 3 — Restaurar Dados

Com `[(ngModel)]`, ao clicar em **Restaurar Dados** os campos voltam aos valores iniciais, pois a variável muda e o campo acompanha.

**Teste adicional (trocar por `[value]`):** após editar os campos e clicar em Restaurar Dados, os parágrafos (interpolação) voltam ao valor inicial, mas os campos podem continuar mostrando o que foi digitado. Isso ocorre porque as variáveis nunca mudaram com a digitação (continuavam com o valor inicial), então ao reatribuir o mesmo valor o Angular não detecta alteração e não reescreve o campo.
