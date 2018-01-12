import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-extra',
  templateUrl: 'extra.html',
})
export class ExtraPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      public toastCtrl: ToastController
    ) {
  }

  ex() {
    let toast = this.toastCtrl.create({
      message: 'XD',
      duration: 3000,
      position:'top'

    });
    toast.present();
  }

}
