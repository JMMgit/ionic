import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { ExtraPage } from '../pages/extra/extra';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    ContactPage,
    AboutPage,
    ExtraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    ContactPage,
    AboutPage,
    ExtraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
