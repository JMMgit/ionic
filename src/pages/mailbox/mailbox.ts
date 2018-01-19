import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {ProfilePage} from '../profile/profile';

/**
 * Generated class for the MailboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mailbox',
  templateUrl: 'mailbox.html',
})
export class MailboxPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MailboxPage');
  }
  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }

      
  goToProfile(){
    this.navCtrl.setRoot(ProfilePage);
  }

}
