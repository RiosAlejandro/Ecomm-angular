import { Component, OnInit } from '@angular/core';
import { ApiFakeStoreService } from '../../services/api-fake-store.service';
import { Data } from '../../interfaces/data.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  data: Data[] = [];

  constructor( private apiStore: ApiFakeStoreService ) { }

  ngOnInit(): void {
    this.getProductos()
  }

  getProductos(){
      this.apiStore.getProductos()
                        .subscribe((data: Data[]) => {
                          this.data = data;
                        });
                          
  }

}
