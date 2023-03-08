import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then((mod) => mod.HomeModule),
    },
    {
        path: 'about',
        loadChildren: () => import('./modules/about/about.module').then((mod) => mod.AboutModule),
    },
    {
        path: '404',
        loadChildren: () => import('./modules/not-found/not-found.module').then((mod) => mod.NotFoundModule),
        data: {
            useShell: false,
        },
    },
    {
        path: '**',
        redirectTo: '404',
    },
];
