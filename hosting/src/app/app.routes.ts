import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guard/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { CortesComponent } from './components/cortes/cortes.component';
import { ContratacionComponent } from './components/contratacion/contratacion.component';
import { CancelacionComponent } from './components/cancelacion/cancelacion.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'layout',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                component: HomeComponent
            },{
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'pagos',
                component: PagosComponent
            },{
                path: 'cortes',
                component: CortesComponent
            },{
                path: 'contratacion',
                component: ContratacionComponent
            },{
                path: 'cancelacion',
                component: CancelacionComponent
            },]
    }
];
