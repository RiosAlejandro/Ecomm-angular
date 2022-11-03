import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    ComponentsModule
  ]
})
export class StoreModule { }
