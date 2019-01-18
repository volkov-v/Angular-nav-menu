import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListTableComponent } from './list-table/list-table.component';
import { ImagesComponent } from './images/images.component';
import { PostTilesComponent } from './post-tiles/post-tiles.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'list-table', component: ListTableComponent},
  { path: 'images', component: ImagesComponent},
  { path: 'post-tiles', component: PostTilesComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
