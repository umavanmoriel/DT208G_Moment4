import { Routes } from '@angular/router';
import {Startpage} from './startpage/startpage';
import {NotFound} from './not-found/not-found';

export const routes: Routes = [
    { path: 'startpage', component: Startpage },
    { path: '', redirectTo: '/startpage', pathMatch: 'full'},
    { path: 'not-found', component : NotFound },
    { path: '**', component : NotFound}
];
