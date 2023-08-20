import type { Meta, StoryObj } from '@storybook/react';
import Text, { Heading } from '../Text/Text';
import Box, { Flex } from '../Box';
import { MultipleComponentTemplate, SingleComponentTemplate } from '../../utils/templates';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Components/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args


export const Typography = SingleComponentTemplate(Text, {
    children: (
        <Flex flexDirection="column" gap={20}>
            <Box>
                <Text variant="h1">Heading 1: </Text>
                <Text>This heading just removes margins and it uses a span as tag</Text>
            </Box>
            <Box>
                <Text variant="h2">Heading 2: </Text>
                <Text>This heading just removes margins and it uses a span as tag</Text>
            </Box>
            <Box>
                <Text variant="h3">Heading 3: </Text>
                <Text>This heading just removes margins and it uses a span as tag</Text>
            </Box>
            <Box>
                <Text>Body: </Text><Text>This is the normal text</Text>
            </Box>
            <Box>
                <Text variant='subtitle'>Small: </Text><Text>This is the normal text</Text>
            </Box>
            <Box>
                <Text variant='subtitle'>Subtitle: </Text><Text>This is the normal text</Text>
            </Box>
            <Box>
                <Text variant='small'>Link: </Text><Text>This is the normal text</Text>
            </Box>
        </Flex>
    )
});

