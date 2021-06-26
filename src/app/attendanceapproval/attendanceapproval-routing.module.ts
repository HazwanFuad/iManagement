import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceapprovalPage } from './attendanceapproval.page';

const routes: Routes = [
  {
    path: '',
    component: AttendanceapprovalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceapprovalPageRoutingModule {}
