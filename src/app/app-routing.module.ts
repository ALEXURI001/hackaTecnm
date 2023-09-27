import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { LoadingComponent } from './components/loading/loading.component';

const routes: Routes = [
  {
    path : 'auth',
    component: AuthComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(x => x.DashboardModule),
    canActivate: [ValidarTokenGuard]
  },
  {
    path: 'loading',
    component: LoadingComponent,
  },
  {
    path: '**',
    redirectTo: 'loading',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
