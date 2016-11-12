import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage, AboutAppPage, ContactPage, QuestionStatsPage, SettingsPage } from '../pages/pages';

@Component({
  templateUrl: 'app.html',
  providers: []
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  constructor(public platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openAboutPage(){
    this.nav.push(AboutAppPage);
  }
  openContactPage(){
    this.nav.push(ContactPage);
  }
  openQandAStatisticsPage(){
    this.nav.push(QuestionStatsPage);
  }
  openSettingsPage() {
    this.nav.push(SettingsPage);
  }
}
