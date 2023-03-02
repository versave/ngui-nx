import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'ngui-typography',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './typography.component.html',
    styleUrls: ['./typography.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypographyComponent {
    @Input() public headingLabel = 'Heading';
}
