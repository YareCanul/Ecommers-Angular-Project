import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination'; //Imports NgxPaginationModule 

@NgModule({
  declarations: [],
  imports: [CommonModule, NgxPaginationModule ],
  exports: [CommonModule, NgxPaginationModule], // Exports NgxPaginationModule 
})
export class UserModel {

    public prducto!: string; 
    public imagen!: string;
    public precio!: string;
    public marca!: string;
    public descuento!: string;

   
}
