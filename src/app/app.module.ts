import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {
            initialNavigation: 'enabledBlocking',
        }),
        LayoutModule,
        ScullyLibModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
