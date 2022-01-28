// Checkbox.stories.ts|tsx

import React from 'react';

import { ComponentMeta } from '@storybook/react';

import { RadioList, RadioListProps } from './radio-list';
import { Radio } from '../radio';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Radio Box List',
    component: RadioList,
} as ComponentMeta<typeof RadioList>;

export const List = (args: any) => {
    return (
        <RadioList layout={args.layout}>
            <Radio className='m-2' checked={true} name='gender'>Male</Radio>
            <Radio className='m-2' name='gender'>Female</Radio>
        </RadioList>
    )
}

List.args = {
    layout: 'col'
} as RadioListProps