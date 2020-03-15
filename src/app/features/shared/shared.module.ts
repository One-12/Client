import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoundPipe } from './pipes/math/round.pipe';
import { TimeAgoPipe } from './pipes/date/time-ago.pipe';

import { TagsComponent } from './components/tags/tags.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { NumberFormatterPipe } from './pipes/math/number-formatter.pipe';

@NgModule({
  declarations: [
    SectionHeaderComponent,
    TagsComponent,
    TimeAgoPipe,
    RoundPipe,
    NumberFormatterPipe,
  ],
  exports: [
    SectionHeaderComponent,
    TagsComponent,
    TimeAgoPipe,
    RoundPipe,
    NumberFormatterPipe,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
