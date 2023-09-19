import type { Meta, StoryObj } from '@storybook/react';
import ImageUpload from './ImageUpload';

const meta: Meta<typeof ImageUpload> = {
    title: 'Components/ImageUpload',
    component: ImageUpload,
    decorators: [],
    parameters: {},
}

export default meta;

type Story = StoryObj<typeof ImageUpload>;

export const Default: Story = {
    args: {},
}