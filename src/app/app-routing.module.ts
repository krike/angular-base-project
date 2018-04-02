import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found.component';


const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class AppRoutingModule {
}
