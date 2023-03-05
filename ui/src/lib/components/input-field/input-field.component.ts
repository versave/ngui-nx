import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'ngui-input-field',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './input-field.component.html',
    styleUrls: ['./input-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFieldComponent {
    @Input() public label?: string;
    @Input() public type: 'text' | 'email' = 'text';
    @Input() public placeholder = '';
    @Input() public errorWarning?: string;
    @Input() public formControl = new FormControl();
    @Output() public inputChange = new EventEmitter<string>();

    public fieldValid(): boolean {
        return !(this.formControl.invalid && (this.formControl.touched || !this.formControl.pristine));
    }
}
