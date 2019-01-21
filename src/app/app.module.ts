import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ListTableComponent } from './list-table/list-table.component';
import { ImagesComponent } from './images/images.component';
import { PostTilesComponent } from './post-tiles/post-tiles.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatTableModule } from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { GalleriaModule } from 'primeng/galleria';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListTableComponent,
    ImagesComponent,
    PostTilesComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MDBBootstrapModule.forRoot(),
    GalleriaModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
