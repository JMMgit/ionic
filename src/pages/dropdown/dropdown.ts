import { Component } from '@angular/core';
import {ViewController, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DropdownPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dropdown',
  templateUrl: 'dropdown.html',
})
export class DropdownPage {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DropdownPage');
  }

  closeDropdown(){
    this.viewCtrl.dismiss();
  }


}
