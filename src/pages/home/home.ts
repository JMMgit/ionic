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

  teachers = [
    {
      name: "Jessica De Guzman",
      image: "../assets/imgs/profile1.jpg",
      time:"Class Started",
      online:"ionitron",
    },
    {
      name: "Marjinnetter Ocampo",
      image: "../assets/imgs/profile2.jpg",
      time:"2:30pm",
      offline:"phone-portrait",
    },
    {
      name: "Gilbert Shawn",
      image: "../assets/imgs/profile3.jpg",
      time:"2:30pm",
      offline:"phone-portrait",
    },
    {
      name: "Shane Liberty",
      image: "../assets/imgs/profile4.jpg",
      time:"2:30pm",
      offline:"phone-portrait",
    },
    {
      name: "Maria Liberty",
      image: "../assets/imgs/profile5.jpg",
      time:"2:30pm",
      offline:"phone-portrait",
    },
    {
      name: "Kim Thomas",
      image: "../assets/imgs/profile6.jpg",
      time:"Class Started",
      online:"ionitron",
    },
    {
      name: "Margarette Liberty",
      image: "../assets/imgs/profile7.jpg",
      time:"Class Started",
      online:"ionitron",
    },
    {
      name: "Leslie Liberty",
      image: "../assets/imgs/profile8.jpg",
      time:"2:30pm",
      offline:"phone-portrait",
    },
    {
      name: "Kim Thomas",
      image: "../assets/imgs/profile6.jpg",
      time:"Class Started",
      online:"ionitron",
    },
    {
      name: "Margarette Liberty",
      image: "../assets/imgs/profile7.jpg",
      time:"2:30pm",
      offline:"phone-portrait",
    },
    {
      name: "Leslie Liberty",
      image: "../assets/imgs/profile8.jpg",
      time:"Class Started",
      online:"ionitron",
    },
    {
      name: "Kim Thomas",
      image: "../assets/imgs/profile6.jpg",
      time:"2:30pm",
      offline:"phone-portrait",
    },
    {
      name: "Margarette Liberty",
      image: "../assets/imgs/profile7.jpg",
      time:"2:30pm",
      offline:"phone-portrait",
    },
    {
      name: "Leslie Liberty",
      image: "../assets/imgs/profile8.jpg",
      time:"Class Started",
      online:"ionitron",
    },
    {
      name: "Kim Thomas",
      image: "../assets/imgs/profile6.jpg",
      time:"Class Started",
      online:"ionitron",
    },
    {
      name: "Margarette Liberty",
      image: "../assets/imgs/profile7.jpg",
      time:"Class Started",
      online:"ionitron",
    },
    {
      name: "Leslie Liberty",
      image: "../assets/imgs/profile8.jpg",
      time:"Class Started",
      online:"ionitron",
    },
    {
      name: "Kim Thomas",
      image: "../assets/imgs/profile6.jpg",
      time:"Class Started",
      online:"ionitron",
    },
    {
      name: "Margarette Liberty",
      image: "../assets/imgs/profile7.jpg",
      time:"Class Started",
      online:"ionitron",
    },
    {
      name: "Leslie Liberty",
      image: "../assets/imgs/profile8.jpg",
      time:"Class Started",
      online:"ionitron",
    },
    {
      name: "Kim Thomas",
      image: "../assets/imgs/profile6.jpg",
      time:"2:30pm",
      offline:"phone-portrait",
    },
    {
      name: "Margarette Liberty",
      image: "../assets/imgs/profile7.jpg",
      time:"2:30pm",
      offline:"phone-portrait",
    },
    {
      name: "Leslie Liberty",
      image: "../assets/imgs/profile8.jpg",
      time:"2:30pm",
      offline:"phone-portrait",
    },
  ];

}
