import { Meta, Story } from '@storybook/angular';
import { FormControl } from '@angular/forms';
import { RadioGroupComponent } from './radio-group.component';
import { Option } from '../../models/forms';

export default {
    title: 'Form/Radio',
    component: RadioGroupComponent,
} as Meta;

const options: Option[] = [
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
    { label: 'Red', value: 'red' },
];

const RadioStory: Story = (args) => ({
    props: args,
});
export const Primary = RadioStory.bind({});
Primary.args = {
    options,
    formControl: new FormControl([]),
} as RadioGroupComponent;
