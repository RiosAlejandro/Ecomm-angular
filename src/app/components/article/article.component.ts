import { Component, OnInit } from '@angular/core';
import { ApiFakeStoreService } from 'src/app/services/api-fake-store.service';
import { Data } from 'src/app/interfaces/data.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  dataArticle: Data[] = [];
  newDataArticle: Data[] = [];

  constructor( private apiStore: ApiFakeStoreService ) { }

  ngOnInit() {
    this.getWomen();
  }

  getWomen(){
    this.apiStore.getWomen()
                    .subscribe((dataArticle: Data[])=>{
                      console.log('aji', dataArticle);
                      this.dataArticle = dataArticle; 
                      return this.newDataArticle = this.dataArticle.filter( item => item.id >= 17);     
                    });

    }
                  
}
