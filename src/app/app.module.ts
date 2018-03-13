import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CarServiceProvider } from '../providers/car-service/car-service';
import { DetailPage } from '../pages/detail/detail';
import { EditPage } from '../pages/edit/edit';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDW9KfhPQBSJuQP04r50x-81jOX2lD39YA",
  authDomain: "c11crud.firebaseapp.com",
  databaseURL: "https://c11crud.firebaseio.com",
  projectId: "c11crud",
  storageBucket: "c11crud.appspot.com",
  messagingSenderId: "55330873546"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    EditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    EditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarServiceProvider
  ]
})
export class AppModule {}
