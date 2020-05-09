import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { FeaturesModule } from './features/features.module';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const firebaseConfig = {
  apiKey: 'AIzaSyBj-DGF0P5unpVEAGAi1qFfNF-de3E8a44',
  authDomain: 'one-12-dev-1588433721353.firebaseapp.com',
  databaseURL: 'https://one-12-dev-1588433721353.firebaseio.com',
  projectId: 'one-12-dev-1588433721353',
  storageBucket: 'one-12-dev-1588433721353.appspot.com',
  messagingSenderId: '706878206699',
  appId: '1:706878206699:web:115eb5d5897bf3651dc4ae',
  measurementId: 'G-LL6K95B1LC',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    FeaturesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
    }),
    FontAwesomeModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
