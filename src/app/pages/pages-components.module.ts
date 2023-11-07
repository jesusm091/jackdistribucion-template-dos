import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { MejorarVersionComponent } from './mejorar-version/mejorar-version.component';
import { ModulosComponent } from './modulos/modulos.component';
import { PreciosComponent } from './precios/precios.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HomeComponent,
    BeneficiosComponent,
    ContactanosComponent,
    MejorarVersionComponent,
    ModulosComponent,
    PreciosComponent,
    NosotrosComponent,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports:[
    HomeComponent,
    BeneficiosComponent,
    ContactanosComponent,
    MejorarVersionComponent,
    ModulosComponent,
    PreciosComponent,
    NosotrosComponent
  ]
})
export class PagesComponentsModule { }
