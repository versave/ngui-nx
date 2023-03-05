import { Meta, Story } from '@storybook/angular';
import { SelectComponent } from './select.component';
import { FormControl } from '@angular/forms';

export default {
    title: 'Form/Select',
    component: SelectComponent,
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
    formControl: new FormControl(options[0].value),
} as SelectComponent;
