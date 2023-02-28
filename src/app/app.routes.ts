import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((mod) => mod.HomeComponent),
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then((mod) => mod.NotFoundComponent),
        data: {
            useShell: false,
        },
    },
];
