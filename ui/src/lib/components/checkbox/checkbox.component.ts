import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'ngui-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
    @Input() public label?: string;
    @Input() public customControl = new FormControl<boolean>(false);
    @Input() public loading = false;
    @Input() public disabled = false;
    @Output() public checkboxChange = new EventEmitter<boolean>();

    public checkboxValid(): boolean {
        return !(this.customControl.invalid && (this.customControl.touched || !this.customControl.pristine));
    }
}
