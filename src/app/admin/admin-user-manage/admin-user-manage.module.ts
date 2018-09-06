import { NgModule } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { AdminSharedModule }  from './../admin-shared/admin-shared.module';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { ConstantsService } from '.././admin-providers/constants.service';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';

const adminUserManageRoutes: Routes = [
  {path:'',component:AdminUserListComponent},
  // {path:'add',component:AdminUserListComponent},
];

@NgModule({
  imports: [
    AdminSharedModule,
    RouterModule.forChild(adminUserManageRoutes),
  ],
  declarations: [AdminUserListComponent]
})
export class AdminUserManageModule { }
