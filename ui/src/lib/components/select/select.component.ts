import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Option } from '../../models/forms';

@Component({
    selector: 'ngui-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
    @Input() public options?: Option[];
    @Input() public customControl = new FormControl();
    @Input() public label?: string;
    @Input() public loading = false;
    @Input() public disabled = false;
    @Output() public selectChange = new EventEmitter<string>();
}
