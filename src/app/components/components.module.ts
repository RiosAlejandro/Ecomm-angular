import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

import { HomeRoutingModule } from '../pages/home/home-routing.module';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { NavComponent } from './nav/nav.component';
import { ArticleComponent } from './article/article.component';
import { CardComponent } from './elements/card/card.component';
import { MenuComponent } from './elements/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { MainComponent } from './main/main.component';
import { LogoComponent } from './elements/logo/logo.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HeaderSecundariosComponent } from './header-secundarios/header-secundarios.component';
import { ArticleSecundaryComponent } from './elements/article-secundary/article-secundary.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    ArticleComponent,
    CardComponent,
    MenuComponent,
    FooterComponent,
    SectionComponent,
    TestimonialsComponent,
    MainComponent,
    LogoComponent,
    CarritoComponent,
    HeaderSecundariosComponent,
    ArticleSecundaryComponent,
    ContactComponent,

  ],
  exports:[
    HeaderComponent,
    NavComponent,
    ArticleComponent,
    FooterComponent,
    SectionComponent,
    TestimonialsComponent,
    MainComponent,
    LogoComponent,
    CarritoComponent,
    HeaderSecundariosComponent,
    ArticleSecundaryComponent,
    ContactComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule
  ]
})
export class ComponentsModule { }