import { TypographyComponent } from './typography.component';
import { Meta, Story } from '@storybook/angular';

export default {
    title: 'Typography',
    component: TypographyComponent,
} as Meta;

const TypographyStory: Story = (args) => ({
    props: args,
});

export const Primary = TypographyStory.bind({});
Primary.args = {
    headingLabel: 'Test',
} as TypographyComponent;
