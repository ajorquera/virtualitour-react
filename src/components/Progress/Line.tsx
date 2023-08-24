import { FC } from "react";
import styled from "styled-components";
import { prop, theme, withProp } from "styled-tools";

interface Props {
    height?: number;
    width?: number;
    variant?: string;
}

const SVGLine = styled.line<Props>`
    stroke: ${withProp('variant', prop => theme(`colors.${prop}`, 'black'))};
    stroke-dasharray: ${prop('height')} 10;
    stroke-width: 100%;

`;

const Line: FC<Props> = ({ height, width, ...props }) => (
    <svg height={height} width={width + '%'}>
        <SVGLine x1="0%" y1="0" x2="100%" y2="0" height={height} {...props} />
    </svg>
)

Line.defaultProps = {
    height: 10
}

export default Line;