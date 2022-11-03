import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/interfaces/data.interface';
import { ApiFakeStoreService } from 'src/app/services/api-fake-store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  data: Data[] = [];
  dataMen: Data[] = [];
  dataJewelery: Data[] = [];

  constructor(private apiStore: ApiFakeStoreService) { }

  ngOnInit() {
    this.getProductos();
    this.getMen();
    this.getJewelery();
  }

  getProductos(){
    this.apiStore.getProductos()
                    .subscribe((data: Data[]) =>{
                      console.log('aja', data);
                      this.data = data
                    })
  }

  getMen(){
    this.apiStore.getMen()
                    .subscribe((dataMen: Data[])=>{
                      console.log('aja', dataMen);
                      this.dataMen = dataMen
                    })
  }

  getJewelery(){
    this.apiStore.getJewelery()
                    .subscribe((dataJewelery: Data[]) =>{
                      console.log('aja', dataJewelery);
                      this.dataJewelery = dataJewelery 
                    })
  }

}
