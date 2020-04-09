import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../common/shared.module';
import { NewSplitComponent } from './addnew/new-split.component';


@NgModule({
  declarations: [DashboardComponent, NewSplitComponent],
  imports: [
    SharedModule, DashboardRoutingModule
  ]
})
export class DashboardModule{ }
