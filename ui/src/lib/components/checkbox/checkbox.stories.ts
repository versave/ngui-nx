import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

export default {
    title: 'Form/Checkbox',
    component: CheckboxComponent,
    decorators: [
        moduleMetadata({
            imports: [ReactiveFormsModule],
        }),
    ],
} as Meta;

const CheckboxStory: Story = (args) => ({
    props: args,
});
export const Primary = CheckboxStory.bind({});
Primary.args = {
    label: 'I agree to the terms and conditions',
    loading: false,
    disabled: false,
    customControl: new FormControl(false, [Validators.requiredTrue]),
} as CheckboxComponent;
