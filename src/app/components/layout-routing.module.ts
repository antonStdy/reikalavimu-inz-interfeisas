import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from '../shared/guard/role.guard';

const routes: Routes = [

    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [RoleGuard] },
    { path: 'client', loadChildren: './client/client.module#ClientModule' },
    { path: 'worker', loadChildren: './login/worker.module#WorkerModule' },
   { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}