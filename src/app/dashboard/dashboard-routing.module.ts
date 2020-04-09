import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NewSplitComponent } from './addnew/new-split.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'split/new', component: NewSplitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {}