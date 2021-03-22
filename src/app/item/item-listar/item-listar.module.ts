import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListarRoutingModule } from './item-listar-routing.module';
import { ItemListarComponent} from './item-listar/item-listar.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [ItemListarComponent],
  imports: [
    CommonModule,
    ItemListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
  ]
})
export class ItemListarModule { }
