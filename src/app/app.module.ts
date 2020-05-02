import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { FeaturesModule } from './features/features.module';

import { AppComponent } from './app.component';
import { AuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const authServiceConfig = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('Google-OAuth-Client-Id'),
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('Facebook-App-Id'),
  },
]);

export function getAuthServiceConfig() {
  return authServiceConfig;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    FeaturesModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
    }),
    FontAwesomeModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
