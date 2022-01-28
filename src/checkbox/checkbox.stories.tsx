// Checkbox.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from './checkbox';
import { CheckboxProps } from '.';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({})
export const Disabled = Template.bind({})
export const Checked = Template.bind({})
export const CheckedDisabled = Template.bind({})

Default.args = {
    children: 'To doing this',
    checked: false,
    theme: 'primary',
    disabled: false
} as CheckboxProps

Checked.args = {
    children: 'We\'ve done this',
    checked: true,
    theme: 'secondary',
    disabled: false
} as CheckboxProps

Disabled.args = {
    children: 'To doing this',
    checked: false,
    theme: 'primary',
    disabled: true
} as CheckboxProps

CheckedDisabled.args = {
    children: 'We\'ve done this',
    checked: true,
    theme: 'secondary',
    disabled: true
} as CheckboxProps