import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';


@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    ComponentsModule
  ]
})
export class FaqModule { }
