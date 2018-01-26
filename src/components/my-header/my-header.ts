import { Component } from '@angular/core';
import {ViewController, PopoverController, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'my-header',
  templateUrl: 'my-header.html'
})
export class MyHeaderComponent {


  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    console.log('Hello MyHeaderComponent Component');
  }


  showMenu(myEvent) {
    let popover = this.popoverCtrl.create("PopmenuPage");
    popover.present({
      ev: myEvent
    });
  }

  showDropdown(myEvent) {
    let popover = this.popoverCtrl.create("DropdownPage");
    popover.present({
      ev: myEvent
    });
  }


  goToHome(){
    this.navCtrl.setRoot('HomePage');
  }

  goToProfile(){
    this.navCtrl.setRoot('ProfilePage');
  }
}
