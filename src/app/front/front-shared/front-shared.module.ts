import { NgModule } from '@angular/core';
import { CoreModule } from './../../core/core.module';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { FrontBreadcrumComponent } from './front-breadcrum/front-breadcrum.component';
import { FrontFooterComponent } from './front-footer/front-footer.component';
import { FrontHeaderComponent } from './front-header/front-header.component';

@NgModule({
  imports: [
  	CoreModule,
    RouterModule
  ],
  declarations: [FrontBreadcrumComponent,FrontFooterComponent,FrontHeaderComponent],
  exports: [
    CoreModule,
    FrontBreadcrumComponent,
    FrontFooterComponent,
    FrontHeaderComponent
  ]
})
export class FrontSharedModule {
	constructor() {
    	// console.log("front shared");	
  	}
 }
