import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PcPartsComponent } from './pc-parts/pc-parts.component';
import { BuildPcComponent } from './build-pc/build-pc.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { TypeSelectorComponent } from './build-pc/type-selector/type-selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ComponentListComponent } from './build-pc/component-list/component-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PcPartsComponent,
    BuildPcComponent,
    MyOrderComponent,
    CheckOutComponent,
    TypeSelectorComponent,
    ComponentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
