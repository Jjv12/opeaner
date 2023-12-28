import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";

import {DashboardComponent} from "./dashboard/dashboard.component";
import {CallbackComponent} from "./callback/callback.component";
import {AuthGuard} from "./auth/guards/auth.guard";

import {LayoutComponent} from "./layout/layout.component";
const routes: Routes = [
    {path : '',                pathMatch : 'full', redirectTo: 'home'},
    {path : '',                component: LayoutComponent,
        children:[
            {path : 'home',        component: HomeComponent},
            {path : 'dashboard',   component: DashboardComponent},
            {path : 'callback',    component: CallbackComponent},
            {path : 'docs',        loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule) }
    ]},

    {path : '',                component: LayoutComponent,
        children:[

    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
