import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiredLabelDirective } from './directives/required-label.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RequiredLabelDirective],
  exports: [
    RequiredLabelDirective
  ]
})
export class SharedModule { }
