import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ShotsComponent } from './shot/shots.component';
import { ShotService } from './services/shot.service';

import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from "@angular/router";
import {routes} from "./routes.rb";
import { ShotListComponent } from './shot-list/shot-list.component';
import { ShotGalleryComponent } from './shot-gallery/shot-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ShotsComponent,
    ShotListComponent,
    ShotGalleryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ShotService,
    ShotsComponent,
    ShotGalleryComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

