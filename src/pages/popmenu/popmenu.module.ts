import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopmenuPage } from './popmenu';

@NgModule({
  declarations: [
    PopmenuPage,
  ],
  imports: [
    IonicPageModule.forChild(PopmenuPage),
  ],
})
export class PopmenuPageModule {}
