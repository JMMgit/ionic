import { Component } from '@angular/core';
import { PopoverController, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'my-header',
  templateUrl: 'my-header.html'
})
export class MyHeaderComponent {


  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    console.log('Hello MyHeaderComponent Component');
  }


  showMenu(myEvent) {
    let popover = this.popoverCtrl.create("PopmenuPage");
    popover.present({
      ev: myEvent
    });
  }

}
