import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';
import { SingleComponentTemplate } from '../../utils/templates';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Components/Header',
    component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = SingleComponentTemplate(Header, {});