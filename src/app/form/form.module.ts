import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { RecentSubmissionsComponent } from './recent-submissions/recent-submissions.component';
import { NewSubmissionComponent } from './new-submission/new-submission.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    SharedModule
  ],
  declarations: [FormComponent, RecentSubmissionsComponent, NewSubmissionComponent]
})
export class FormModule { }
