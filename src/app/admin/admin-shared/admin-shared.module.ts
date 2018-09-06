import { NgModule } from '@angular/core';
import { CoreModule } from './../../core/core.module';
import { FormButtonComponent } from './form-button/form-button.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';



@NgModule({
  imports: [
    CoreModule,
    RouterModule,
    CKEditorModule
  ],
  declarations: [
    FormButtonComponent,AdminHeaderComponent, AdminFooterComponent, AdminSideBarComponent    
  ],
  providers: [

  ],
  exports: [
    CoreModule,FormButtonComponent,CKEditorModule,AdminHeaderComponent, AdminFooterComponent, AdminSideBarComponent    
  ]
})
export class AdminSharedModule { }
