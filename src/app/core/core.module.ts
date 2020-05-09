import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { ConfigService } from './services/config.service';
import { AuthService } from './auth/services/auth.service';

function load(configService: ConfigService): () => Promise<boolean> {
  return () => configService.getSettings();
}

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  exports: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: load,
      multi: true,
      deps: [ConfigService],
    },
    ConfigService,
    AuthService,
  ],
})
export class CoreModule {}
