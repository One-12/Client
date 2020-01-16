import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsComponent } from './tags/tags.component';
import { SectionHeaderComponent } from './section-header/section-header.component';

@NgModule({
  declarations: [SectionHeaderComponent, TagsComponent],
  exports: [SectionHeaderComponent, TagsComponent],
  imports: [CommonModule],
})
export class SharedModule {}
