import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Option } from '../../models/forms';

@Component({
    selector: 'ngui-radio',
    templateUrl: './radio-group.component.html',
    styleUrls: ['./radio-group.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupComponent {
    @Input() public options?: Option[];
    @Input() public customControl = new FormControl();
    @Input() public loading = false;
    @Input() public disabled = false;
    @Output() public radioChangeEvent = new EventEmitter<string>();
}
