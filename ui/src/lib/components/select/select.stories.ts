import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SelectComponent } from './select.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export default {
    title: 'Form/Select',
    component: SelectComponent,
    decorators: [
        moduleMetadata({
            imports: [ReactiveFormsModule],
        }),
    ],
} as Meta;

const options = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Unknown', value: 'unknown' },
];

const SelectStory: Story = (args) => ({
    props: args,
});
export const Primary = SelectStory.bind({});
Primary.args = {
    options,
    label: 'Gender',
    customControl: new FormControl(options[0].value),
} as SelectComponent;
