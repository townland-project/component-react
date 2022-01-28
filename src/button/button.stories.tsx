// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button';
import { ButtonProps } from '.';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Outlined = Template.bind({});
export const OutlinedDisabled = Template.bind({});
export const OutlinedColor = Template.bind({});
export const OutlinedLess = Template.bind({});
export const Flat = Template.bind({});
export const FlatDisabled = Template.bind({});

Outlined.args = {
    label: 'Outlined Button',
    styled: 'outlined',
    className: 'bg-red-500',
    disabled: false
} as ButtonProps;

OutlinedDisabled.args = {
    label: 'Outlined Button',
    styled: 'outlined',
    className: 'bg-red-500',
    disabled: true
} as ButtonProps;

OutlinedColor.args = {
    label: 'Outlined Color Button',
    styled: 'outlined',
    className: 'bg-red-500 border-red-900',
    disabled: false
} as ButtonProps;

OutlinedLess.args = {
    label: 'Outlined Less Button',
    styled: 'outlined:less',
    className: 'bg-amber-500',
    disabled: false
} as ButtonProps;

Flat.args = {
    label: 'Flat Button',
    styled: 'flat',
    className: 'bg-yellow-400',
    disabled: false
} as ButtonProps;

FlatDisabled.args = {
    label: 'Flat Button',
    styled: 'flat',
    className: 'bg-yellow-400',
    disabled: true
} as ButtonProps;