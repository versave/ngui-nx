import { Route } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const notFoundRoutes: Route[] = [
    {
        path: '',
        component: NotFoundPageComponent,
        data: {
            useShell: false,
        },
    },
];
