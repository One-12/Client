import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoundPipe } from './pipes/math/round.pipe';

import { TagsComponent } from './components/tags/tags.component';
import { NumberFormatterPipe } from './pipes/math/number-formatter.pipe';
import { SectionHeaderComponent } from './components/section-header/section-header.component';

@NgModule({
  declarations: [SectionHeaderComponent, TagsComponent, RoundPipe, NumberFormatterPipe],
  exports: [SectionHeaderComponent, TagsComponent, RoundPipe, NumberFormatterPipe],
  imports: [CommonModule],
})
export class SharedModule {}
