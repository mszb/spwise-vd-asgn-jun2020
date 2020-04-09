import { NgModule } from '@angular/core';
import { UserModuleRouting } from './users-routing.module';
import { SharedModule } from 'src/app/common/shared.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [MainComponent],
  imports: [
    SharedModule, UserModuleRouting
  ]
})


export class UsersModule { }