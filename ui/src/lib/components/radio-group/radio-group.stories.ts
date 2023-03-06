import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RadioGroupComponent } from './radio-group.component';
import { Option } from '../../models/forms';

export default {
    title: 'Form/Radio',
    component: RadioGroupComponent,
    decorators: [
        moduleMetadata({
            imports: [ReactiveFormsModule],
        }),
    ],
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
    customControl: new FormControl([]),
} as RadioGroupComponent;
