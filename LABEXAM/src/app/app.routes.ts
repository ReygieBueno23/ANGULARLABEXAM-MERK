import { Routes } from '@angular/router';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';

export const routes: Routes = [
  { path: 'signup-component', component: SignupComponentComponent },
  { path: 'login-component', component: LoginComponentComponent },
];
