import { NgModule } from '@angular/core';
import { AuthHttpInterceptor } from './auth-http-interceptor';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class IndiceAuthModule {
  // tslint:disable-next-line:typedef
  static forRoot() {
    return {
    ngModule: IndiceAuthModule,
    providers: [AuthService, AuthGuardService, AuthHttpInterceptor]
    }
 }
}
