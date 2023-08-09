
import styled from "styled-components";
import { ColorProps, SpaceProps, TypographyProps, VariantArgs, color, compose, space, typography, variant } from "styled-system";

export interface Props extends TypographyProps, ColorProps, SpaceProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'caption' | 'overline' | 'button';
}
const Text = styled.span<Props>(compose(typography, color, space), variant({
    variants: {
        h1: {
            fontSize: '2rem',
            fontWeight: 'bold',
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
        },
        h3: {
            fontSize: '1.25rem',
            fontWeight: '700',
            margin: 0
        },
        h4: {
            fontSize: '2.125rem',
            fontWeight: '400',
        },
        h5: {
            fontSize: '1.5rem',
            fontWeight: '400',
        },
        h6: {
            fontSize: '1.1rem',
            fontWeight: '500',
            margin: 0
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 'normal',
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 'normal',
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 'normal',
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 'normal',
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 'normal',
        },
        overline: {
            fontSize: '0.75rem',
            fontWeight: 'normal',
        },
        button: {
            fontSize: '0.875rem',
            fontWeight: '500',
        },

    }
}));


export const Heading = styled(Text).attrs<Props>(({ variant }) => ({ as: variant }))({
    margin: 0,
    padding: 0
});

export default Text;