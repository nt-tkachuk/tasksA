import {Routes} from "@angular/router";
import {ShotListComponent} from './shot-list/shot-list.component';
import {ShotGalleryComponent} from './shot-gallery/shot-gallery.component';
import {AppComponent} from "./app.component";

export  const routes: Routes = [
  {
    path: '',
component: AppComponent
/*redirectTo: '/shots',
pathMatch : 'full'*/
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


