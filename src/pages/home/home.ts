import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular'
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, app: App, menu: MenuController) {
    menu.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
