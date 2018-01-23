import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchedPage } from './sched';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    SchedPage,
  ],
  imports: [
    IonicPageModule.forChild(SchedPage),
    ComponentsModule
  ],
})
export class SchedPageModule {}
