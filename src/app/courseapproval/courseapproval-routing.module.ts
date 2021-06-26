import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseapprovalPage } from './courseapproval.page';

const routes: Routes = [
  {
    path: '',
    component: CourseapprovalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseapprovalPageRoutingModule {}
