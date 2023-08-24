
import styled from "styled-components";
import { ColorProps, SpaceProps, TypographyProps, VariantArgs, color, compose, space, typography, variant } from "styled-system";

export interface Props extends TypographyProps, ColorProps, SpaceProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h6' | 'body' | 'subtitle' | 'small' | 'link';
}
const Text = styled.span<Props>(compose(typography, color, space), variant({
    variants: {
        h1: {
            fontSize: 5,
            fontFamily: 'heading'
        },
        h2: {
            fontSize: '1.5rem',
            fontFamily: 'heading'
        },
        h3: {
            fontSize: '1.25rem',
            fontFamily: 'heading'
        },
        body: {
            fontSize: '.7rem',
        },
        small: {
            fontSize: '.5rem',
        },
    }
}));

Text.defaultProps = {
    variant: 'body'
}


export const Heading = styled(Text).attrs<Props>(({ variant }) => ({ as: variant }))({
    margin: 0,
    padding: 0
});

export default Text;