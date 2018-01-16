import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {FaqPage} from '../faq/faq';
import {CareersPage} from '../careers/careers';
import {LoginPage} from '../login/login';

/**
 * Generated class for the HowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-how',
  templateUrl: 'how.html',
})
export class HowPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HowPage');
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

  goToCareers(){
    this.navCtrl.setRoot(CareersPage);
  }
  
}
