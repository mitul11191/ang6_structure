import { NgModule } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { FrontLoginComponent } from './front-login/front-login.component';
import { FrontRegistrationComponent } from './front-registration/front-registration.component';
import { FrontForgotPasswordComponent } from './front-forgot-password/front-forgot-password.component';
import { FrontResetPasswordComponent } from './front-reset-password/front-reset-password.component';
import { FrontSharedModule } from '.././front-shared/front-shared.module';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { ConstantsService } from '.././front-providers/constants.service';


const loginRoutes: Routes = [
  {path:'',redirectTo:'login'},
  {path: 'login', component: FrontLoginComponent }, 
  {path: 'register', component: FrontRegistrationComponent }, 
  {path: 'forgot-password', component: FrontForgotPasswordComponent }, 
  {path: 'reset-password/:resetlink', component: FrontResetPasswordComponent }
];


@NgModule({
  imports: [
    FrontSharedModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [FrontLoginComponent,FrontRegistrationComponent,FrontForgotPasswordComponent, FrontResetPasswordComponent],
  exports:[FrontLoginComponent,FrontRegistrationComponent,FrontForgotPasswordComponent, FrontResetPasswordComponent]
})
export class FrontUserManagementModule {
    constructor( 
      private router: Router,
      private _constantsService: ConstantsService,
      private _localStorageService: LocalStorageService,
    ) {
      if(this._localStorageService.checkFrontTokenExists()){
        this.router.navigate([this._constantsService.loggedInUserRedirect]);
      }
    
  } 
 }
