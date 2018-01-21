import { Component } from '@angular/core';
import { PopoverController,IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  showChat(myEvent) {
    let popover = this.popoverCtrl.create("ChatPage");
    popover.present({
      ev: myEvent
    });
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
