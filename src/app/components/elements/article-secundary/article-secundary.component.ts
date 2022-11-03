import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-secundary',
  templateUrl: './article-secundary.component.html',
  styleUrls: ['./article-secundary.component.scss']
})
export class ArticleSecundaryComponent implements OnInit {

  @Input() tituloArticle!: string; 
  @Input() textoArticle!: string; 
  @Input() vinetaArticle!: string[]; 


  constructor() { }

  ngOnInit(): void {
  }

}
