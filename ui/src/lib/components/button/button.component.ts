import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'ngui-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    @Input() public elementType: 'button' | 'link' = 'button';
    @Input() public buttonType: 'button' | 'submit' = 'button';
    @Input() public href = '#';
    @Input() public label?: string;
    @Input() public loading = false;
    @Input() public disabled = false;
}
