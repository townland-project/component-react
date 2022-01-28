// Checkbox.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio, RadioProps } from './radio';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Radio Box',
    component: Radio,
} as ComponentMeta<typeof Radio>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({})
export const Checked = Template.bind({})
export const Disabled = Template.bind({})
export const CheckedDisabled = Template.bind({})

Default.args = {
    name: 'radio-button',
    children: 'To doing this',
    checked: false,
    theme: 'primary',
    disabled: false
} as RadioProps

Checked.args = {
    name: 'radio-button',
    children: 'We\'ve done this',
    checked: true,
    theme: 'secondary',
    disabled: false
} as RadioProps

Disabled.args = {
    name: 'radio-button',
    children: 'To doing this',
    checked: false,
    theme: 'primary',
    disabled: true
} as RadioProps

CheckedDisabled.args = {
    name: 'radio-button',
    children: 'We\'ve done this',
    checked: true,
    theme: 'secondary',
    disabled: true
} as RadioProps
