import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { MultipleComponentTemplate, SingleComponentTemplate } from '../../utils/templates';


export default {
    title: 'Components/Button',
    component: Button,
};

export const Default = {
    render: MultipleComponentTemplate(Button, [
        { children: 'Default' },
        { children: 'Primary', variant: 'primary' },
        { children: 'Primary Dark', variant: 'primary-dark' },
        { children: 'Secondary', variant: 'secondary' },
        { children: 'Outline Primary', variant: 'outline-primary' },
        { children: 'Outline Primary Dark', variant: 'outline-primary-dark' },
        { children: 'Outline Secondary', variant: 'outline-secondary' },
        { children: 'Outline', variant: 'outline' },
        { children: 'Text', variant: 'text' },
    ])
}

export const Circular = MultipleComponentTemplate(Button, [
    {
        children: 'Circular',
    },
    {
        variant: 'primary',
        children: 'Circular',
    },
    {
        variant: 'secondary',
        children: 'Circular',
    },
], {
    circular: true,
}
);
