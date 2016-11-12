import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage, AboutAppPage, ContactPage, QuestionStatsPage, SettingsPage } from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
     HomePage, AboutAppPage, ContactPage, QuestionStatsPage, SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
     HomePage, AboutAppPage, ContactPage, QuestionStatsPage, SettingsPage
  ],
  providers: [
    
  ]
})
export class AppModule {}
