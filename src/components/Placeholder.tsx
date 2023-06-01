import styled, { css, keyframes } from 'styled-components';

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;
export interface Props {
  circle?: boolean;
  width?: string | number;
  height?: string | number;
  color?: string;
  duration?: number;
  highlightColor?: string;
  stopAnimation?: boolean;
}

const Placeholder = styled.div<Props>`
  border-radius: 4px;
  width: 100%;
  ${(p: any) =>
    p.circle &&
    css`
      border-radius: 50%;
    `}
  ${(p: any) =>
    p.width &&
    css`
      width: ${typeof p.width === 'number' ? `${p.width}px` : p.width};
    `}
  ${(p: any) =>
    p.height &&
    css`
      height: ${typeof p.height === 'number' ? `${p.height}px` : p.height};
    `}
  background-color: ${(p: any) => p.color};
  background-size: 200px 100%;
  background-repeat: no-repeat;
  line-height: 1;
  ${(p: any) =>
    !p.stopAnimation &&
    css`
      background-image: linear-gradient(90deg, ${(p: any) => p.color}, ${(p: any) => p.highlightColor}, ${(p: any) => p.color});
      animation: ${skeletonKeyframes} ${(p: any) => p.duration}s ease-in-out infinite;
    `}
`;

Placeholder.defaultProps = {
  width: 'default',
  height: '100%',
  duration: 1.2,
  circle: false,
  color: '#eff1f3',
  highlightColor: '#e2e2e2',
  stopAnimation: false,
};

export default Placeholder;
