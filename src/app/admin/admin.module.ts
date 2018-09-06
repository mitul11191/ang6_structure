import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminSharedModule } from './admin-shared/admin-shared.module';

import { AuthGuardService }                from './admin-providers/auth-guard.service';
import { CanDeactivateGuardService }       from './admin-providers/can-deactivate-guard.service';


import { AdminComponent } from './admin.component';

import { ConstantsService } from './admin-providers/constants.service';

const adminRoutes: Routes = [

  {
    path: 'auth',
    loadChildren: './admin-login-module/admin-login.module#AdminLoginModule',
  },
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        canActivateChild: [],
        children: [
          { path: '', loadChildren: './admin-app/admin-app.module#AdminAppModule' }
        ]
      }
    ]
  }
];


@NgModule({
	imports: [
		AdminSharedModule,
		RouterModule.forChild(adminRoutes)
	],
	providers: [
		ConstantsService,
		AuthGuardService,
		CanDeactivateGuardService
	],
	declarations: [AdminComponent]
})
export class AdminModule {
  constructor() {
    
  }
}
