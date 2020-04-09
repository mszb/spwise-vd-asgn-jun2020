import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent as UserMainComponent } from './main/main.component';

const routes: Routes = [
    { path: '', component: UserMainComponent },
    // { path: 'split/new', component: NewSplitComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserModuleRouting {}