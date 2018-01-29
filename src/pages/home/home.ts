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
      name: "- Jessica De Guzman",
      quote: "Hello Everyone! I am teacher Fae. I have been teaching English for almost five years now. I chose this path because I love teaching and I love to see my students.<span class=\"invi-sm\"> During those years of teaching, I have encountered different students with diffferent levels and personalities, and I can say that one of them is is remarkable. I saw them improved and be successful speaking the aim language. As a teacher, I make sure that my students are learning and having fun in my class at the same time. So, you can learn more than you know</span>",
      image: "../assets/imgs/profile1.jpg",
    },
    {
      name: "- Marjinnetter Ocampo",
      quote: "Hello Everyone! I am teacher Fae. I have been teaching English for almost five years now. I chose this path because I love teaching and I love to see my students.<span class=\"invi-sm\"> During those years of teaching, I have encountered different students with diffferent levels and personalities, and I can say that one of them is is remarkable. I saw them improved and be successful speaking the aim language. As a teacher, I make sure that my students are learning and having fun in my class at the same time. So, you can learn more than you know</span>",
      image: "../assets/imgs/profile2.jpg",
    },
    {
      name: "- Gilbert Shawn",
      quote: "Hello Everyone! I am teacher Fae. I have been teaching English for almost five years now. I chose this path because I love teaching and I love to see my students.<span class=\"invi-sm\"> During those years of teaching, I have encountered different students with diffferent levels and personalities, and I can say that one of them is is remarkable. I saw them improved and be successful speaking the aim language. As a teacher, I make sure that my students are learning and having fun in my class at the same time. So, you can learn more than you know</span>",
      image: "../assets/imgs/profile3.jpg",
    },
    {
      name: "- Shane Liberty",
      quote: "Hello Everyone! I am teacher Fae. I have been teaching English for almost five years now. I chose this path because I love teaching and I love to see my students.<span class=\"invi-sm\"> During those years of teaching, I have encountered different students with diffferent levels and personalities, and I can say that one of them is is remarkable. I saw them improved and be successful speaking the aim language. As a teacher, I make sure that my students are learning and having fun in my class at the same time. So, you can learn more than you know</span>",
      image: "../assets/imgs/profile4.jpg",
    },
    {
      name: "- Maria Liberty",
      quote: "Hello Everyone! I am teacher Fae. I have been teaching English for almost five years now. I chose this path because I love teaching and I love to see my students.<span class=\"invi-sm\"> During those years of teaching, I have encountered different students with diffferent levels and personalities, and I can say that one of them is is remarkable. I saw them improved and be successful speaking the aim language. As a teacher, I make sure that my students are learning and having fun in my class at the same time. So, you can learn more than you know</span>",
      image: "../assets/imgs/profile5.jpg",
    },
    {
      name: "- Kim Thomas",
      quote: "Hello Everyone! I am teacher Fae. I have been teaching English for almost five years now. I chose this path because I love teaching and I love to see my students.<span class=\"invi-sm\"> During those years of teaching, I have encountered different students with diffferent levels and personalities, and I can say that one of them is is remarkable. I saw them improved and be successful speaking the aim language. As a teacher, I make sure that my students are learning and having fun in my class at the same time. So, you can learn more than you know</span>",
      image: "../assets/imgs/profile6.jpg",
    },
    {
      name: "- Margarette Liberty",
      quote: "Hello Everyone! I am teacher Fae. I have been teaching English for almost five years now. I chose this path because I love teaching and I love to see my students.<span class=\"invi-sm\"> During those years of teaching, I have encountered different students with diffferent levels and personalities, and I can say that one of them is is remarkable. I saw them improved and be successful speaking the aim language. As a teacher, I make sure that my students are learning and having fun in my class at the same time. So, you can learn more than you know</span>",
      image: "../assets/imgs/profile7.jpg",
    },
    {
      name: "- Leslie Liberty",
      quote: "Hello Everyone! I am teacher Fae. I have been teaching English for almost five years now. I chose this path because I love teaching and I love to see my students.<span class=\"invi-sm\"> During those years of teaching, I have encountered different students with diffferent levels and personalities, and I can say that one of them is is remarkable. I saw them improved and be successful speaking the aim language. As a teacher, I make sure that my students are learning and having fun in my class at the same time. So, you can learn more than you know</span>",
      image: "../assets/imgs/profile8.jpg",
    },
  ];

}
