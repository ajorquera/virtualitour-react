import type { Meta, StoryObj } from '@storybook/react';
import Box from './CustomBox';

const meta: Meta<typeof Box> = {
    title: 'Components/Box',
    component: Box,
    decorators: [],
    parameters: {},
}

export default meta;

type Story = StoryObj<typeof Box>;

export const Pixelated: Story = {
    args: {
        padding: '10px',
        height: '100px',
        children: 'Hello World',
        pixelateCorners: true,
        borderColor: 'black',
        borderWidth: 1,
        borderCornerPixelMultiplier: 3,
        borderRadius: 2,
        borderStyle: 'solid',
    },
}

export const Border: Story = {
    args: {
        padding: '10px',
        height: '100px',
        children: 'Hello World',
        border: '3px solid black',
    }
}