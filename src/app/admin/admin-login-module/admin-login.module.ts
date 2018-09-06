import { NgModule } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { AdminSharedModule }  from './../admin-shared/admin-shared.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminForgotComponent } from './admin-forgot/admin-forgot.component';
import { AdminResetPassComponent } from './admin-reset-pass/admin-reset-pass.component';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { ConstantsService } from '.././admin-providers/constants.service';


const adminLoginRoutes: Routes = [
  {path:'',redirectTo:'login'},
  {path: 'login', component: AdminLoginComponent }, 
  {path: 'forgot-password', component: AdminForgotComponent }, 
  {path: 'reset-password/:resetlink', component: AdminResetPassComponent }
];


@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(adminLoginRoutes),
    AdminSharedModule
  ],
  declarations: [
    AdminLoginComponent, AdminForgotComponent, AdminResetPassComponent    
  ],
  providers: [

  ],
  exports: [
    AdminLoginComponent, AdminForgotComponent, AdminResetPassComponent    
  ]
})
export class AdminLoginModule {
  constructor( 
    private router: Router,
    private _constantsService: ConstantsService,
    private _localStorageService: LocalStorageService,
  ) {
    if(this._localStorageService.checkAdminTokenExists()){
      this.router.navigate([this._constantsService.loggedInUserRedirect]);
    }  
  }
}
