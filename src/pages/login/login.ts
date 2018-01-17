import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {FaqPage} from '../faq/faq';
import {AboutPage} from '../about/about';
import {CareersPage} from '../careers/careers';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }

  goToFaq(){
    this.navCtrl.setRoot(FaqPage);
  }

  goToCareers(){
    this.navCtrl.setRoot(CareersPage);
  }
  
  goToAbout(){
    this.navCtrl.setRoot(AboutPage);
  }
}
