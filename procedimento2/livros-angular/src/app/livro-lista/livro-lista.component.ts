
import { ControleLivrosService } from './../controle-livros.service';
import { ControleEditoraService } from './../controle-editora.service';
import { Component,OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {

  editoras:Editora[]=[];
  livros:Livro[]=[]


  private servEditora_ :ControleEditoraService
  private servLivros_:ControleLivrosService

  constructor(
    servEditora:ControleEditoraService,
    servLivros:ControleLivrosService)
    {
      this.servEditora_=servEditora
      this.servLivros_=servLivros

    }

  ngOnInit(): void {
    this.editoras=this.servEditora_.getEditoras()
    this.livros=this.servLivros_.obterLivros()
    //console.log('ngOnInit' )
  }

  excluir  = (codigo:number)=>{
    console.log('click excluir livro')
    this.servLivros_.excluir(codigo)
  }

   obterNome=(codEditora:number):any =>{
   return this.servEditora_.getNomeEditora(codEditora)
  }


}
