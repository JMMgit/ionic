import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {CareersPage} from '../careers/careers';
import {AboutPage} from '../about/about';
import {LoginPage} from '../login/login';

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }

  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }

  goToCareers(){
    this.navCtrl.setRoot(CareersPage);
  }

  goToLogin(){
    this.navCtrl.setRoot(LoginPage);
  }

  goToAbout(){
    this.navCtrl.setRoot(AboutPage);
  }

}
