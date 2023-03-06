import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';
import { UiModule } from '@ngui-nx/ui';

@NgModule({
    declarations: [HomePageComponent],
    imports: [CommonModule, LayoutModule, RouterModule.forChild(homeRoutes), UiModule],
})
export class HomeModule {}
