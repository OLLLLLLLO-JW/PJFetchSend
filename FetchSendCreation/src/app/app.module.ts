import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TypeSourcingComponent } from './type-sourcing/type-sourcing.component';
import { GetTokenComponent } from './get-token/get-token.component';
import { CreateTypeComponent } from './create-type/create-type.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeSourcingComponent,
    GetTokenComponent,
    CreateTypeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
