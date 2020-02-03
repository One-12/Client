import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { ConfigService } from './services/config.service';

function load(configService: ConfigService): () => Promise<boolean> {
  return () => configService.getSettings();
}

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: load,
      multi: true,
      deps: [ConfigService],
    },
    ConfigService,
  ],
})
export class CoreModule {}
