import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontComponent } from './front.component';
import { ConstantsService } from './front-providers/constants.service';
import { ObservablesService } from './front-providers/observables.service';
import { AuthGuardService } from './front-providers/auth-guard.service';

const frontRoutes: Routes = [
  {
    path: 'user',
    loadChildren: './front-user-management/front-user-management.module#FrontUserManagementModule',
  },
  {
    path: '',
    component: FrontComponent,
    canActivateChild: [ AuthGuardService ],
    children: [
      {
        path: '',
        children: [
          { path: '', loadChildren: './front-app/front-app.module#FrontAppModule' }
        ]
      }
    ]
  }
];




@NgModule({
  imports: [
    RouterModule.forChild(frontRoutes)
  ],
  declarations: [FrontComponent],
  providers:[ConstantsService,ObservablesService,AuthGuardService],
  exports:[]
})
export class FrontModule {
	constructor() {
    	
  	}

 }
