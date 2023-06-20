import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { CarouselComponent } from './carousel';
import { CardsComponent } from './cards';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CardsComponent
  ]
})
export class PageModule { }
