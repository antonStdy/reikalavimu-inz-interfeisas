import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RoleGuard } from './shared/guard/role.guard';
import { WorkerComponent } from './components/worker/worker.component';
import { ClientComponent } from './components/client/client.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
  //   // canActivate: [AuthGuard],
  //   children: [
  //     { path: 'client', loadChildren: './layout/client/client.module#ClientModule', canActivate: [AuthGuard] },
  //     { path: 'worker', loadChildren: './layout/worker/worker.module#WorkerModule', canActivate: [AuthGuard] },
  //     { path: 'login', loadChildren: './login/login.module#LoginModule' },
  //   ]
  // }
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'client', /*loadChildren: './layout/client/client.module#ClientModule',*/component: ClientComponent, canActivate: [AuthGuard] },
    { path: 'worker', /*loadChildren: './layout/worker/worker.module#WorkerModule',*/ component: WorkerComponent, canActivate: [AuthGuard] },
    { path: 'login', /*loadChildren: './login/login.module#LoginModule'*/ component: LoginComponent },
   { path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}