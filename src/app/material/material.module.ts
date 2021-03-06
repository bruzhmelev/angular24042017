import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdInputModule, MdToolbarModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdInputModule,
    MdCardModule,
    NoopAnimationsModule
  ],
  exports: [MdToolbarModule, MdCardModule, MdInputModule, NoopAnimationsModule],
  declarations: []
})
export class MaterialModule {
}
