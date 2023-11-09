import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

import { PreciosComponent } from './precios/precios.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { ModulosSoftComponent } from './modulos-soft/modulos-soft.component';



@NgModule({
  declarations: [
    HomeComponent,
    BeneficiosComponent,
    ContactanosComponent,
  
  
    PreciosComponent,
    NosotrosComponent,
    ModulosSoftComponent,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports:[
    HomeComponent,
    BeneficiosComponent,
    ContactanosComponent,
    ModulosSoftComponent,
    PreciosComponent,
    NosotrosComponent
  ]
})
export class PagesComponentsModule { }
