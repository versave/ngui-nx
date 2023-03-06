import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { notFoundRoutes } from './not-found.routes';
import { UiModule } from '@ngui-nx/ui';

@NgModule({
    declarations: [NotFoundPageComponent],
    imports: [CommonModule, LayoutModule, RouterModule.forChild(notFoundRoutes), UiModule],
})
export class NotFoundModule {}
