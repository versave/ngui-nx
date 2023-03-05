import { Meta, Story } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { FormControl, Validators } from '@angular/forms';

export default {
    title: 'Form/Checkbox',
    component: CheckboxComponent,
} as Meta;

const CheckboxStory: Story = (args) => ({
    props: args,
});
export const Primary = CheckboxStory.bind({});
Primary.args = {
    label: 'I agree to the terms and conditions',
    loading: false,
    disabled: false,
    formControl: new FormControl(false, [Validators.requiredTrue]),
} as CheckboxComponent;
