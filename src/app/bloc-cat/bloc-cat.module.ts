import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCatsComponent } from './view-cats/view-cats.component';
import { BlocCatRoutingModule } from './bloc-cat-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ViewCatsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlocCatRoutingModule,
    HttpClientModule
  ]
})
export class BlocCatModule { }
