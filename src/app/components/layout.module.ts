import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from '../material.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
})
export class ClientModule { }
