import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  goToHome(){
    this.navCtrl.setRoot("HomePage");
  }

  goToFaq(){
    this.navCtrl.setRoot("FaqPage");
  }

  goToCareers(){
    this.navCtrl.setRoot("CareersPage");
  }
  
  goToAbout(){
    this.navCtrl.setRoot("AboutPage");
  }

    
  goToProfile(){
    this.navCtrl.setRoot("ProfilePage");
  }


  goToLogin(){
    this.navCtrl.setRoot("LoginPage");
  }
}