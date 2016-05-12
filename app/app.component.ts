import {Component} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx'; // Load all
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { FormComponent } from './form/form.component'; // TODO
import { LoginComponent } from './login/login.component'; // TODO
// import { NavComponent } from './common/nav/nav.component'; // TODO

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@Routes([
    { path: '/login', component: LoginComponent},
    { path: '/form', component: FormComponent}
    
])
export class AppComponent { 
    pageTitle: 'Naslovna'
}
