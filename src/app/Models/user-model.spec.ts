import { UserModel } from './user-model';
import { NgxPaginationModule } from 'ngx-pagination'; // At the top of your module
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';




describe('UserModel', () => {
  it('should create an instance', () => {
    expect(new UserModel()).toBeTruthy();
  });

});

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule // Add this line of code here
  ] })