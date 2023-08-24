import styled from 'styled-components';
import {
    space,
    flexbox,
    FlexboxProps,
    compose,
    SpaceProps,
    layout,
    LayoutProps as StyledLayoutProps,
    color,
    ColorProps,
    border,
    BorderProps,
} from 'styled-system';

import Text, { Props as TextProps } from './Text/Text'

export interface BoxProps extends SpaceProps, BorderProps, LayoutProps { }
export const Box = styled.div<BoxProps>(space, border, layout);
export const Span = styled.span<BoxProps>(space, border, layout);

export interface ColorBoxProps extends BoxProps, ColorProps { }
export const ColorBox = styled.div<ColorBoxProps>(space, color);
export interface FlexProps extends FlexboxProps, BoxProps {
    gap?: number | string;
    inline?: boolean;
}

const getGap = (props: any) => ({ gap: props.gap });
const getDisplay = (props: any) => ({ display: props.inline ? 'inline-flex' : 'flex' });
export const Flex = styled(Box)<FlexProps>(getDisplay, compose(flexbox), getGap);

export interface LayoutProps extends StyledLayoutProps { }
export const Layout = styled.div<LayoutProps>(layout);

export default Box;

export { Text };