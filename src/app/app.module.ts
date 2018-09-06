import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { NotificationsComponent } from './core/components/notifications/notifications.component';
import { NotificationsService } from './core/services/notifications.service';
import { AuthInterceptor } from './core/services/auth-interceptor';
import { LocalStorageService } from './core/services/local-storage.service';

const appRoutes: Routes = [
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: '', loadChildren: './front/front.module#FrontModule'  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
    appRoutes,
    {
          enableTracing: false,
          preloadingStrategy: SelectivePreloadingStrategy,
      }
    )
  ],
  providers: [
      SelectivePreloadingStrategy,
      NotificationsService,
      LocalStorageService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      }],
  bootstrap: [AppComponent]
})
export class AppModule {
	constructor(router: Router) {
    	// console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  	}
}