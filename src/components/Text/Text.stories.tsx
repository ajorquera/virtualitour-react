import React, { FC, PropsWithChildren } from "react";

import Box, { Flex } from "../Box";
import Text, { Props as TextProps } from "./Text";
import Theme from "../../Theme";


export default {
    title: 'Components/Text',
    component: Text,
};

interface Props extends PropsWithChildren {
    title: string;
    variant?: TextProps['variant'];
    example?: string;
    titleVariant?: TextProps['variant'];
}

const TextExample: FC<Props> = ({ title, children, variant, example, titleVariant = 'h2' }) => {
    return (
        <Theme>
            <Flex alignItems="center" >
                <>
                    <Box width={400} mr={4}>
                        <Box>
                            <Text variant={titleVariant}>{title}</Text>
                        </Box>
                        <Box>
                            <Text>{children}</Text>
                        </Box>
                    </Box>

                    {example && <Text variant={variant}>{example}</Text>}
                </>
            </Flex>
        </Theme>
    )
}


export const Typography = () => {
    return (
        <>
            <TextExample title="Variant" variant="h1" example="Examples" titleVariant="h1"></TextExample>
            <hr style={{ width: '100%', marginBottom: 20, marginTop: 5 }} />
            <Flex flexDirection="column" gap={20}>
                <TextExample title="h1" variant="h1" example="Heading - another">The biggest type of text. Set for page titles mainly</TextExample>
                <TextExample title="h2" variant="h2" example="Subtitle - Examples - Option A">This variant should be use for subtitles in a page</TextExample>
                <TextExample title="h3" variant="h3" example="Submenu - Subheader - Fields">Smallest header which may be use for separation of elements in a page, like a fieldset</TextExample>
                <TextExample title="body" variant="body" example={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'}>This is the default text variant for any content in a page</TextExample>
                <TextExample title="small" variant="small" example={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'}>Small text for notifications or error messages</TextExample>
            </Flex>
        </>
    )
}