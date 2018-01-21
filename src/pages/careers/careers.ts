import { Component } from '@angular/core';
import {  IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-careers',
  templateUrl: 'careers.html',
})
export class CareersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Where do you live?');

    alert.addInput({
      type: 'radio',
      label: 'Manila',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Pampanga',
      value: 'value2'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Submit',
    });
    alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CareersPage');
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
