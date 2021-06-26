import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabnavPage } from './tabnav.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabnavPage,
    children: [
      {
        path: 'userdashboard',
        loadChildren: () => import('../userdashboard/userdashboard.module').then( m => m.UserdashboardPageModule)
      },
      {
        path: 'attendance',
        loadChildren: () => import('../attendance/attendance.module').then( m => m.AttendancePageModule)
      },
      {
        path: 'course',
        loadChildren: () => import('../course/course.module').then( m => m.CoursePageModule)
      },
      {
        path: 'leave',
        loadChildren: () => import('../leave/leave.module').then( m => m.LeavePageModule)
      },
      {
        path: 'reader',
        loadChildren: () => import('../reader/reader.module').then( m => m.ReaderPageModule)
      },
      {
        path: 'attendanceapproval',
        loadChildren: () => import('../attendanceapproval/attendanceapproval.module').then( m => m.AttendanceapprovalPageModule)
      },
      {
        path: 'courseapproval',
        loadChildren: () => import('../courseapproval/courseapproval.module').then( m => m.CourseapprovalPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/userdashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/userdashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TabnavPageRoutingModule {}
