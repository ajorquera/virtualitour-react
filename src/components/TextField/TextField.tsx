import React, { FC, HTMLAttributes, InputHTMLAttributes, useId } from "react";
import { Span, Text } from "../Box";
import styled from "styled-components";
import { ifProp, prop, theme } from "styled-tools";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const getColor = (color: string) => theme(`colors.${color}`, color);
const getBlack = getColor('black');

const Input = styled.input<Props>`
    padding: 10px;
    outline: none;
    border-radius: 4px;
    border-style: solid;
    border-width: 2px;

    border-color: ${ifProp("error", getColor('red'), getBlack)};
    
    &:focus {
        background-color: ${getBlack};
        color: ${getColor('white')};
        border-color: ${getBlack};
    }
`;


const TextField: FC<Props> = ({ label, error, fullWidth, ...props }) => {

    const id = useId();
    return (
        <Span >
            <Text mb={1} variant="small" style={{ display: 'block', width: fullWidth ? '100%' : undefined }} as="label" htmlFor={id}>{label}</Text>
            <Input
                error={error}
                id={id}
                {...props}
            />
            {error && <Text ml={1} mt={1} as="div" color="error" variant="small">{error}</Text>}
        </Span>
    );
}

export default TextField;