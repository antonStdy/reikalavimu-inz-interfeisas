import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './material.module';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './components/login/login.component';
import { ClientComponent } from './components/client/client.component';
import { WorkerComponent } from './components/worker/worker.component';
import { OrderDialogComponent } from './components/client/components/order-dialog/order-dialog.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DemoMaterialModule,
    ReactiveFormsModule
 ],
 providers: [
   CookieService
 ],
  declarations: [ AppComponent, LoginComponent, ClientComponent, WorkerComponent, OrderDialogComponent ],
  entryComponents: [OrderDialogComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
