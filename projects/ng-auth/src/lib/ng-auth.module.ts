import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';
import { AuthHttpInterceptor } from './auth-http-interceptor';
import { AuthService } from './auth.service';
import { TenantHeaderInterceptor } from './tenant/tenant-header.interceptor';
import { TenantService } from './tenant/tenant-service';

@NgModule({
  declarations: [],
  imports: [RouterModule]
})
export class IndiceAuthModule {
  // tslint:disable-next-line:typedef
  static forRoot() {
    return {
      ngModule: IndiceAuthModule,
      providers: [
        AuthGuardService,
        AuthHttpInterceptor,
        AuthService,
        TenantHeaderInterceptor,
        TenantService
      ]
    };
  }
}
