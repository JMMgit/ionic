import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {FaqPage} from '../faq/faq';
import {AboutPage} from '../about/about';
import {LoginPage} from '../login/login';

/**
 * Generated class for the CareersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-careers',
  templateUrl: 'careers.html',
})
export class CareersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CareersPage');
  }

  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }

  goToFaq(){
    this.navCtrl.setRoot(FaqPage);
  }

  goToLogin(){
    this.navCtrl.setRoot(LoginPage);
  }

  goToAbout(){
    this.navCtrl.setRoot(AboutPage);
  }
}
