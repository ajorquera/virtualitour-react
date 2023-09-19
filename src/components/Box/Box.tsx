import styled from 'styled-components';

import {
    flexbox,
    FlexboxProps,
    compose,
    layout,
    LayoutProps as StyledLayoutProps,
} from 'styled-system';

import Text from '../Text/Text'
import Box, { Props as BoxProps } from './CustomBox';

export interface FlexProps extends FlexboxProps, BoxProps {
    gap?: number | string;
    inline?: boolean;
}

const getGap = (props: any) => ({ gap: props.gap });
const getDisplay = (props: any) => ({ display: props.inline ? 'inline-flex' : 'flex' });
export const Span = styled(Box) <BoxProps>``;

Span.defaultProps = {
    as: 'span'
};

export const Flex = styled(Box)<FlexProps>(getDisplay, compose(flexbox), getGap);

export interface LayoutProps extends StyledLayoutProps { }
export const Layout = styled.div<LayoutProps>(layout);

export default Box;
export type { BoxProps };

export { Text };
