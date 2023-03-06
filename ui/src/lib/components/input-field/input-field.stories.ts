import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { InputFieldComponent } from './input-field.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

export default {
    title: 'Form/Input Field',
    component: InputFieldComponent,
    decorators: [
        moduleMetadata({
            imports: [ReactiveFormsModule],
        }),
    ],
} as Meta;

const InputFieldStory: Story = (args) => ({
    props: args,
});
export const Primary = InputFieldStory.bind({});
Primary.args = {
    label: 'Email',
    placeholder: 'Enter your email',
    errorWarning: 'Please enter a valid email address',
    customControl: new FormControl(null, [Validators.required]),
    type: 'email',
} as InputFieldComponent;
