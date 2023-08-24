import type { Meta, StoryObj } from '@storybook/react';

import Plan from './Plan';
import { MultipleComponentTemplate, SingleComponentTemplate } from '../../utils/templates';


export default {
    title: 'Components/Plan',
    component: Plan,
};

export const Default = {
    render: MultipleComponentTemplate(Plan, [
        {
            features: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            ], title: 'Mi Tour', price: 10.2, monthly: true
        },
        {
            selected: true,
            features: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            ], title: 'Mi Tour', price: 0, monthly: true
        },
    ])
}