import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'ngui-shell',
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {}
