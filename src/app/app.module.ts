import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SliderComponent} from './component/slide/slide.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TipComponent} from "./component/tip/tip.component";

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    TipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
