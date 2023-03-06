import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'ngui-input-field',
    templateUrl: './input-field.component.html',
    styleUrls: ['./input-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFieldComponent {
    @Input() public label?: string;
    @Input() public type: 'text' | 'email' = 'text';
    @Input() public placeholder = '';
    @Input() public errorWarning?: string;
    @Input() public customControl = new FormControl();
    @Output() public inputChange = new EventEmitter<string>();

    public fieldValid(): boolean {
        return !(this.customControl.invalid && (this.customControl.touched || !this.customControl.pristine));
    }
}
