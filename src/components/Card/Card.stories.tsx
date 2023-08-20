import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';
import Text, { Heading } from '../Text/Text';
import Box from '../Box';
import { MultipleComponentTemplate } from '../../utils/templates';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Components/Card',
    component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const CardTemplate = ({ children, title }: any) => (
    <>
        <Heading variant='h3'>
            {title}
        </Heading>
        <Box mt={2}>
            <Text>
                {children}
            </Text>
        </Box>
    </>
);


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args


export const Default: Story = {
    args: {
        width: '500px',
        children: <CardTemplate title="Card with message">
            Here is the content of the card. Here we can put anything we want. An emoji ❤️, a button, a form, etc.
        </CardTemplate>,
    },
};

export const WithElevation = MultipleComponentTemplate(Card, [
    {

        elevation: 0,
        children: <CardTemplate title="Elevation 0">This elevation gives the sensation of a pushed card</CardTemplate>,
    },
    {
        elevation: 1,
        children: <CardTemplate title="Elevation 1">No elevation</CardTemplate>,
    },
    {
        elevation: 3,
        children: <CardTemplate title="Elevation 3">Simple elevation, the default one</CardTemplate>,
    },
    {
        elevation: 5,
        children: <CardTemplate title="Elevation 5">More elevation</CardTemplate>,
    },
    {
        elevation: 8,
        children: <CardTemplate title="Elvation 8">Most extreme elevation</CardTemplate>,
    },
], {
    width: '500px',
});

