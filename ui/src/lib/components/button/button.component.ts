import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'ngui-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    @Input() public elementType: 'button' | 'link' = 'button';
    @Input() public buttonType: 'button' | 'submit' = 'button';
    @Input() public href = '#';
    @Input() public label = '';
    @Input() public loading = false;
    @Input() public disabled = false;
}
