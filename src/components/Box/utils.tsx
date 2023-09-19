import { css } from "styled-components";
import { BoxShadowProps } from "styled-system";
import { BoxProps } from "./Box";
import { ifProp, theme, withProp } from "styled-tools";


interface Coord {
    x: number;
    y: number;
}




interface PathProps {
    borderRadius?: number;
    borderWidth?: number;
    borderCornerPixelMultiplier?: number;
}

interface PixelatedBorder extends PathProps {
    borderColor?: string;
}



export const generateBorderPath = (props: any) => `
    ${generateOuterPath(props.borderRadius, props.borderCornerPixelMultiplier)},
    0px 50%,
    ${props.borderWidth * props.borderCornerPixelMultiplier}px 50%,
    ${generateInnerPath(props.borderRadius, props.borderCornerPixelMultiplier, props.borderWidth, true)},
    ${props.borderWidth * props.borderCornerPixelMultiplier}px 50%,
    0px 50%
`;

const generateInnerPath = (radius: number, pixelSize: number, offset: number, reverse = false) => {
    const points = generatePoints(radius, pixelSize);
    const inset =
        offset < radius
            ? insetCoords(points, pixelSize, offset)
            : generatePoints(2, pixelSize, offset);
    const flipped = flipCoords(inset);
    const corners = addCorners(flipped);

    return generatePath(corners, reverse);
}

export const pixelatedBorder = ifProp(['pixelateCorners', 'borderWidth', 'borderCornerPixelMultiplier', 'borderRadius'], css<PixelatedBorder>`
    position: relative;
    border-color: transparent;
    clip-path: polygon(${props => generateOuterPath(props?.borderRadius || 1, props.borderCornerPixelMultiplier || 1)});
    
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        clip-path: polygon(${generateBorderPath});
        background: ${withProp('borderColor', prop => theme(`colors.${prop}`, prop || 'black'))};
    }
`);

const generateOuterPath = (radius: number, pixelSize: number) => {
    const points = generatePoints(radius, pixelSize);
    const flipped = flipCoords(points);

    return generatePath(flipped);
}

const insetCoords = (coords: Coord[], pixelSize: number, offset: number) => {
    return coords
        .map(({ x, y }) => ({
            x: x + pixelSize * offset,
            y: y + pixelSize * Math.floor(offset / 2),
        }))
        .reduce<typeof coords>((ret, item) => {
            if (ret.length > 0 && ret[ret.length - 1].x === ret[ret.length - 1].y) {
                return ret;
            }

            ret.push(item);

            return ret;
        }, []);
}
const generatePath = (coords: Coord[], reverse = false) => {
    const mirroredCoords = mirrorCoords(coords);

    return (reverse ? mirroredCoords : mirroredCoords.reverse())
        .map((point) => {
            return `${point.x} ${point.y}`;
        })
        .join(",\n    ");
}

const numberParseInt = (n: number) => {
    return parseInt(n.toString(), 10);
};

const generatePoints = (radius: number, pixelSize: number, offset = 0) => {
    const coords = [];

    const lastCoords = {
        x: -1,
        y: -1,
    };

    for (let i = 270; i > 225; i--) {
        const x = numberParseInt(radius * Math.sin((2 * Math.PI * i) / 360) + radius + 0.5) * pixelSize;
        const y = numberParseInt(radius * Math.cos((2 * Math.PI * i) / 360) + radius + 0.5) * pixelSize;

        if (x !== lastCoords.x || y !== lastCoords.y) {
            lastCoords.x = x;
            lastCoords.y = y;

            coords.push({
                x: x + offset * pixelSize,
                y: y + offset * pixelSize,
            });
        }
    }

    const mergedCoords = mergeCoords(coords);
    const corners = addCorners(mergedCoords);

    return corners;
}

const flipCoords = (coords: Coord[]) => {
    return [
        ...coords,
        ...coords.map(({ x, y }) => ({ x: y, y: x })).reverse(),
    ].filter(({ x, y }, i, arr) => {
        return !i || arr[i - 1].x !== x || arr[i - 1].y !== y;
    });
}



const mergeCoords = (coords: Coord[]) => {
    return coords.reduce<typeof coords>((result, point, index) => {
        if (
            index !== coords.length - 1 &&
            point.x === 0 &&
            coords[index + 1].x === 0
        ) {
            return result;
        }

        if (index !== 0 && point.y === 0 && coords[index - 1].y === 0) {
            return result;
        }

        if (
            index !== 0 &&
            index !== coords.length - 1 &&
            point.x === coords[index - 1].x &&
            point.x === coords[index + 1].x
        ) {
            return result;
        }

        result.push(point);
        return result;
    }, []);
}

const addCorners = (coords: Coord[]) => {
    return coords.reduce<typeof coords>((result, point, i) => {
        result.push(point);

        if (
            coords.length > 1 &&
            i < coords.length - 1 &&
            coords[i + 1].x !== point.x &&
            coords[i + 1].y !== point.y
        ) {
            result.push({
                x: coords[i + 1].x,
                y: point.y,
            });
        }

        return result;
    }, []);
}


const mirrorCoords = (coords: Coord[], offset = 0) => {
    return [
        ...coords.map(({ x, y }) => ({
            x: offset ? `${x + offset}px` : `${x}px`,
            y: offset ? `${y + offset}px` : `${y}px`,
        })),
        ...coords.map(({ x, y }) => ({
            x: edgeCoord(y, offset),
            y: offset ? `${x + offset}px` : `${x}px`,
        })),
        ...coords.map(({ x, y }) => ({
            x: edgeCoord(x, offset),
            y: edgeCoord(y, offset),
        })),
        ...coords.map(({ x, y }) => ({
            x: offset ? `${y + offset}px` : `${y}px`,
            y: edgeCoord(x, offset),
        })),
    ];
}

const edgeCoord = (n: number, offset: number) => {
    if (offset) {
        return n === 0
            ? `calc(100% - ${offset}px)`
            : `calc(100% - ${offset + n}px)`;
    }

    return n === 0 ? "100%" : `calc(100% - ${n}px)`;
}