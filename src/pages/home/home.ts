import { Component } from '@angular/core';
import { PopoverController,IonicPage, NavController, NavParams } from 'ionic-angular';
import {CareersPage} from '../careers/careers';
import {FaqPage} from '../faq/faq';
import {AboutPage} from '../about/about';
import {LoginPage} from '../login/login';
import {ChatPage} from '../chat/chat';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  showChat(myEvent) {
    let popover = this.popoverCtrl.create(ChatPage);
    popover.present({
      ev: myEvent
    });
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

  goToAbout(){
    this.navCtrl.setRoot(AboutPage);
  }

}
