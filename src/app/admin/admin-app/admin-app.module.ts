import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminSharedModule }  from './../admin-shared/admin-shared.module';

import { AdminAppComponent }           from './admin-app.component';
import { AdminDashboardComponent }  from './../admin-dashboard/admin-dashboard.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminAppComponent,
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'user-manage', loadChildren: './../admin-user-manage/admin-user-manage.module#AdminUserManageModule' }

    ]
  }
];

@NgModule({
  imports: [
    AdminSharedModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [AdminAppComponent,AdminDashboardComponent]
})
export class AdminAppModule {
  constructor(){
    // console.log("admin app module");
  }
}
