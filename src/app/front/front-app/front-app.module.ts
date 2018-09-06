import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontAppComponent } from './front-app.component';
import { FrontHomePageComponent } from './front-home-page.component';

import { FrontSharedModule } from '.././front-shared/front-shared.module';

const frontRoutes: Routes = [
  {
    path: '',
    component: FrontAppComponent,
    children: [
      { path: '', component: FrontHomePageComponent },
      { path: 'temp', loadChildren: './../front-temp-module/front-temp-module.module#FrontTempModuleModule' }
      // { path: 'user', loadChildren: './../front-user-management/front-user-management.module#FrontUserManagementModule' }

    ]
  }
];


@NgModule({
  imports: [
    FrontSharedModule,
    RouterModule.forChild(frontRoutes)
  ],
  declarations: [FrontAppComponent,FrontHomePageComponent],
  exports:[]
})
export class FrontAppModule {
	constructor() {
    	// console.log("front app module");	
  	}

 }
