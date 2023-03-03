import { ActivationEnd, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ShellComponent } from './components/shell/shell.component';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { filter, map } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MetaHandlerService } from './services/meta-handler/meta-handler.service';

@UntilDestroy()
@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, ShellComponent, NgTemplateOutlet],
    selector: 'ngui-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public useShell = true;

    constructor(private router: Router, private metaHandlerService: MetaHandlerService) {}

    public ngOnInit(): void {
        this.handleRouteData();
    }

    private handleRouteData(): void {
        this.router.events
            .pipe(
                filter((event: any) => event instanceof ActivationEnd),
                map((event: ActivationEnd) => event?.snapshot?.data),
                untilDestroyed(this)
            )
            .subscribe((routeData) => {
                this.useShell = (routeData?.['useShell'] as boolean) ?? true;
                this.metaHandlerService.initDefaultMetaTags();
            });
    }
}
