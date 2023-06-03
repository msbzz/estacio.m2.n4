import { Injectable } from '@angular/core';
import { Livro } from './livro';
@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  constructor() {}

  livros: Livro[] = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'HTML5 e CSS3: guia prático e visual',
      resumo:
        'Aprenda HTML5 e CSS3 de forma rápida e fácil!•A abordagem de fácilvisualização utiliza exemplos de códigos do mundo real para guiá-lo pelo aprendizado de HTML e CSS',
      autores: ['Elizabeth Castro', 'Bruce Hyslop'],
    },
    {
      codigo: 2,
      codEditora: 1,
      titulo: 'CSS Grid Layout: Criando Layouts CSS Profissionais',
      resumo:
        'A criação de Layout CSS sempre foi uma tarefa trabalhosa, mas agora os profissionais têm uma ferramenta poderosa ao seu alcance, o CSS Grid Layout',
      autores: ['Maurício Samy Silva'],
    },
    {
      codigo: 3,
      codEditora: 1,
      titulo: 'Padrões JavaScript',
      resumo:
        'Qual é a melhor maneira de desenvolver uma aplicação em JavaScript? Este livro, ao apresentar inúmeros padrões e as melhores práticas no JavaScript',
      autores: ['Stoyan Stefanov'],
    },
  ];

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = this.livros[this.livros.length - 1].codigo + 1;
    this.livros.push(livro);
  }

  excluir(cod: number) {
    const index = this.livros.findIndex((item) => item.codigo === cod);
    if (index >= 0) {
      this.livros.splice(index, 1);
    }
  }
}
