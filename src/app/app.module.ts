import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage, AboutAppPage, ContactPage, QuestionStatsPage, SettingsPage, QuestionAndAnswerPage } from '../pages/pages';
import { SanitizeHtml } from '../utilities/sanitizeHtml';

@NgModule({
  declarations: [
    MyApp,
     HomePage, AboutAppPage, ContactPage, QuestionStatsPage, SettingsPage, QuestionAndAnswerPage, SanitizeHtml
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
     MyApp, HomePage, AboutAppPage, ContactPage, QuestionStatsPage, SettingsPage, QuestionAndAnswerPage
  ],
  providers: [
    
  ]
})
export class AppModule {}
