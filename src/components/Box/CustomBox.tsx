import styled from "styled-components";
import { ColorProps, LayoutProps, SpaceProps, border, BorderProps as StyledBorderProps, color, layout, space } from "styled-system";
import { pixelatedBorder } from "./utils";
import { ReactNode } from "react";

interface BorderProps extends Omit<StyledBorderProps, 'borderRadius' | 'borderColor' | 'borderWith'> {
    borderCornerPixelMultiplier?: number;
    borderRadius?: number;
    borderWidth?: number;
    borderColor?: string;
    pixelateCorners?: boolean;
}

export interface BoxProps extends SpaceProps, BorderProps, LayoutProps, ColorProps {
    as?: string;
    children?: ReactNode | ReactNode[] | string;
}

export const Box = styled.div<BoxProps>(space, layout, color, border, pixelatedBorder);

Box.defaultProps = {
    borderCornerPixelMultiplier: 1
}

export type Props = BoxProps;

export default Box;