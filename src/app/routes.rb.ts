import {Routes} from "@angular/router";
import {ShotGalleryComponent} from './shot-gallery/shot-gallery.component';

export  const routes: Routes = [
  {
    path: '',
    /*component: AppComponent*/
    redirectTo: '/shots',
    pathMatch : 'full'
},
{
path: 'shots',
component: ShotGalleryComponent//ShotListComponent
},
{
path: 'shots/:shotId',
component: ShotGalleryComponent//ShotListComponent
}
];


