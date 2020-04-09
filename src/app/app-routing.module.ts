import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found-template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KhapasceneComponent } from './khapascene/khapascene.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  //{ path: 'home', component: DashboardComponent },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'user', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)},
  { path: 'khapa/scene', component: KhapasceneComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
