import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then((mod) => mod.HomeModule),
    },
    {
        path: '**',
        loadChildren: () => import('./modules/not-found/not-found.module').then((mod) => mod.NotFoundModule),
        data: {
            useShell: false,
        },
    },
];
