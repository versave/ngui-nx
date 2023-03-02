import { ButtonComponent } from './button.component';
import { Meta, Story } from '@storybook/angular';

export default {
    title: 'Button',
    component: ButtonComponent,
} as Meta;

const ButtonStory: Story = (args) => ({
    props: args,
});

export const Primary = ButtonStory.bind({});
Primary.args = {
    elementType: 'button',
    buttonType: 'button',
    label: 'Click me',
    loading: false,
    disabled: false,
} as ButtonComponent;

export const Link = ButtonStory.bind({});
Link.args = {
    elementType: 'link',
    label: 'Click me',
    href: 'https://www.google.com',
    loading: false,
    disabled: false,
} as ButtonComponent;
