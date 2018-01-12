import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';
import { ExtraPage } from '../extra/extra';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot:any =HomePage
  contactRoot:any = ContactPage
  aboutRoot:any = AboutPage
  extraRoot:any = ExtraPage



  constructor(public navCtrl: NavController) {}

}
