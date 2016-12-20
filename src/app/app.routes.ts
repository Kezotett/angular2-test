// ====== ./app/app.routes.ts ======

// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonAppComponent } from './person-app/person-app.component';


// Route Configuration
export const routes: Routes = [
    { path: '', redirectTo: '/person', pathMatch: 'full' },
    { path: 'person', component: PersonAppComponent },
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);