import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentModalPage } from './student-modal';

@NgModule({
  declarations: [
    StudentModalPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentModalPage),
  ],
})
export class StudentModalPageModule {}
