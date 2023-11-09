import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    
    NavbarComponent,
         FooterComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
  
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})
export class ComonComponentsModule { }
