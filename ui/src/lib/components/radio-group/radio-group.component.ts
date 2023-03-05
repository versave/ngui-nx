import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Option } from '../../models/forms';

@Component({
    selector: 'ngui-radio',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './radio-group.component.html',
    styleUrls: ['./radio-group.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupComponent {
    @Input() public options?: Option[];
    @Input() public formControl = new FormControl();
    @Input() public loading = false;
    @Input() public disabled = false;
    @Output() public radioChangeEvent = new EventEmitter<string>();
}
