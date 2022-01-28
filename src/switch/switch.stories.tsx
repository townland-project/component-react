// Checkbox.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch, SwitchProps } from './switch';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Switch',
    component: Switch,
} as ComponentMeta<typeof Switch>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({})
export const Checked = Template.bind({})

Default.args = {
    children: 'To doing this',
    checked: false,
    theme: 'primary'
} as SwitchProps

Checked.args = {
    children: 'We\'ve done this',
    checked: true,
    theme: 'secondary'
} as SwitchProps