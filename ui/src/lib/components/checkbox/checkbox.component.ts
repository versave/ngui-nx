import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'ngui-checkbox',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
    @Input() public label?: string;
    @Input() public formControl = new FormControl<boolean>(false);
    @Input() public loading = false;
    @Input() public disabled = false;
    @Output() public checkboxChange = new EventEmitter<boolean>();

    public checkboxValid(): boolean {
        return !(this.formControl.invalid && (this.formControl.touched || !this.formControl.pristine));
    }
}
