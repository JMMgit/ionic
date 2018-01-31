import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GradedModalPage } from './graded-modal';

@NgModule({
  declarations: [
    GradedModalPage,
  ],
  imports: [
    IonicPageModule.forChild(GradedModalPage),
  ],
})
export class GradedModalPageModule {}
