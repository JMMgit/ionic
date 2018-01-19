import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {MailboxPage} from '../mailbox/mailbox';
import {LoginPage} from '../login/login';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }

  showModal() {
    let modal = this.modalCtrl.create(MailboxPage);
    modal.present();
  }

  gotoMail() {
    this.navCtrl.setRoot(MailboxPage);
  }
  
  goToLogin(){
    this.navCtrl.setRoot(LoginPage);
  }
}
