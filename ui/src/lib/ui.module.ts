import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { SelectComponent } from './components/select/select.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';

@NgModule({
    declarations: [ButtonComponent, CheckboxComponent, InputFieldComponent, RadioGroupComponent, SelectComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [ButtonComponent, CheckboxComponent, InputFieldComponent, RadioGroupComponent, SelectComponent],
})
export class UiModule {}
