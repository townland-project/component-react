// Input.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input, InputProps } from './input';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Input',
    component: Input,
} as ComponentMeta<typeof Input>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

const Fix = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
    );
}

export const Basic = Template.bind({})
export const BasicPrefix = Template.bind({})
export const BasicPostfix = Template.bind({})
export const Labeled = Template.bind({})
export const LabeledPrefix = Template.bind({})
export const LabeledPostfix = Template.bind({})

Basic.args = {
    type: 'text',
    placeholder: 'Placeholder'
} as InputProps;

BasicPrefix.args = {
    type: 'text',
    placeholder: 'Placeholder',
    prefix: <Fix />
} as InputProps;

BasicPostfix.args = {
    type: 'text',
    placeholder: 'Placeholder',
    postfix: <Fix />
} as InputProps;

Labeled.args = {
    label: 'Label',
    type: 'text',
    placeholder: 'Placeholder'
} as InputProps;

LabeledPrefix.args = {
    label: 'Label',
    type: 'text',
    placeholder: 'Placeholder',
    prefix: <Fix />
} as InputProps;

LabeledPostfix.args = {
    label: 'Label',
    type: 'text',
    placeholder: 'Placeholder',
    postfix: <Fix />
} as InputProps;