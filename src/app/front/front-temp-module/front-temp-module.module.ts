import { NgModule } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { FrontTempComponentComponent } from './front-temp-component/front-temp-component.component';
import { FrontSharedModule } from '.././front-shared/front-shared.module';

const tempRoutes: Routes = [
  {path:'',component: FrontTempComponentComponent}
  
];

@NgModule({
  imports: [
    FrontSharedModule,
    RouterModule.forChild(tempRoutes)
  ],
  declarations: [FrontTempComponentComponent]
})
export class FrontTempModuleModule { }
