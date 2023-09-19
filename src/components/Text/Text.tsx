
import styled from "styled-components";
import { ColorProps, SpaceProps, TypographyProps, color, compose, space, typography, variant } from "styled-system";

export interface Props extends TypographyProps, ColorProps, SpaceProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h6' | 'body' | 'subtitle' | 'small' | 'link';
    textDecoration?: 'underline' | 'none';
}
const Text = styled.span<Props>(compose(typography, color, space), variant({
    variants: {
        h1: {
            fontSize: "2rem",
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
            fontSize: '.8rem',
        },
        small: {
            fontSize: '.6rem',
        },
        link: {
            fontSize: '.8rem',
            textDecoration: 'underline',
            color: 'black'
        }
    }
}), ({ textDecoration }) => ({ textDecoration }));


export const Heading = styled(Text).attrs<Props>(({ variant, textDecoration }) => ({ as: variant }))({
    margin: 0,
    padding: 0,
});

export default Text;