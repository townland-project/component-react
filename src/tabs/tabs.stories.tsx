// Tabs.stories.ts|tsx

import React, { useState } from 'react';

import { ComponentMeta } from '@storybook/react';

import { Tab, TabContainer, TabContainerProps, Tabs, TabContent } from './tabs';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Tabs',
    component: TabContainer,
} as ComponentMeta<typeof TabContainer>;


export const Basic = (props: TabContainerProps) => {
    let [tab, setTab] = useState<number>(1);

    return (
        <TabContainer position={props.position ?? 'top'} className='mt-12'>
            <TabContent className='h-[500px] w-[500px]'>
                Tab #{tab}
            </TabContent>
            <Tabs>
                {[1, 2, 3, 4, 5].map(i =>
                    <Tab
                        key={i}
                        active={i === tab}
                        onClick={() => setTab(i)}
                        className='bg-white'
                    >
                        Tab #{i}
                    </Tab>
                )}
            </Tabs>
        </TabContainer>
    )
}