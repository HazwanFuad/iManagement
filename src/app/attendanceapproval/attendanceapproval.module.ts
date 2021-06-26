import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceapprovalPageRoutingModule } from './attendanceapproval-routing.module';

import { AttendanceapprovalPage } from './attendanceapproval.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceapprovalPageRoutingModule
  ],
  declarations: [AttendanceapprovalPage]
})
export class AttendanceapprovalPageModule {}
