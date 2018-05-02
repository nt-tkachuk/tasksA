import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ShotsComponent } from './shot/shots.component';
import { ShotService } from './services/shot.service';

import {HTTP_INTERCEPTORS, HttpClientModule, HttpInterceptor} from '@angular/common/http';
import {RouterModule} from "@angular/router";
import {routes} from "./routes.rb";
import { ShotListComponent } from './shot-list/shot-list.component';
import { ShotGalleryComponent } from './shot-gallery/shot-gallery.component';
import { PreloaderComponent } from './preloader/preloader.component';
import {shotInterceptor} from "./interceptors/interceptor";


@NgModule({
  declarations: [
    AppComponent,
    ShotsComponent,
    ShotListComponent,
    ShotGalleryComponent,
    PreloaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS , useClass: shotInterceptor, multi: true},
    ShotService,
    ShotsComponent,
    ShotGalleryComponent,

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

