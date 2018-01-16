import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CareersPage} from '../careers/careers';
import {FaqPage} from '../faq/faq';
import {HowPage} from '../how/how';
import {LoginPage} from '../login/login';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToCareers(){
    this.navCtrl.setRoot(CareersPage);
  }

  goToFaq(){
    this.navCtrl.setRoot(FaqPage);
  }

  goToLogin(){
    this.navCtrl.setRoot(LoginPage);
  }

  goToHow(){
    this.navCtrl.setRoot(HowPage);
  }

}
