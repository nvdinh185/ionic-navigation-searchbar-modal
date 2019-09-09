import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NavigationDetailsPage, NavigationPage } from '../pages/navigation/navigation';
import { SearchbarsPage } from '../pages/searchbars/searchbars';
import { ModalPage, ModalContentPage } from '../pages/modal/modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NavigationPage,
    NavigationDetailsPage,
    SearchbarsPage,
    ModalPage,
    ModalContentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NavigationPage,
    NavigationDetailsPage,
    SearchbarsPage,
    ModalPage,
    ModalContentPage
  ],
  providers: []
})
export class AppModule { }
