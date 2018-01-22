import { Component } from '@angular/core';
import { PopoverController,IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  showChat(myEvent) {
    let popover = this.popoverCtrl.create("ChatPage");
    popover.present({
      ev: myEvent
    });
  }

}
