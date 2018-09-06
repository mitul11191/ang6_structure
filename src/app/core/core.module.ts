import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule }         from '@angular/forms';
import { MenuToggleDirective } from './directives/menu-toggle.directive';
import { DispValidationComponent } from './components/disp-validation/disp-validation.component';
import { OnlyNumberDirective } from './directives/only-number/only-number.directive';
import { CommonHttpService } from './services/common-http.service';
import { GroupByPipe }   from './services/common-pipes.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MenuToggleDirective,
    DispValidationComponent,
    OnlyNumberDirective,
    GroupByPipe
  ],
  providers: [
    CommonHttpService
  ],
  exports: [
    CommonModule,
    FormsModule,
    MenuToggleDirective,
    DispValidationComponent,
    OnlyNumberDirective,
    GroupByPipe,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ]	
})
export class CoreModule { }
