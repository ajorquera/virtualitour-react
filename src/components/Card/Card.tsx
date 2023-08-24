
import styled from 'styled-components';
import { prop, withProp } from 'styled-tools';
import Box, { BoxProps } from '../Box';

interface CardProps extends BoxProps {
    elevation?: number;
}

const Card = styled(Box) <CardProps>`
    border-style: solid;
    background-color: white;
    box-shadow: ${withProp(prop('elevation'), prop => prop - 1)}px ${withProp(prop('elevation'), prop => prop - 1)}px 0px 0px;
    border-radius: 2px;
    display: inline-block;
    border-width: ${withProp(prop('elevation'), prop => prop / 2)}px;
`;

Card.defaultProps = {
    p: 2,
    elevation: 3
}

export default Card;