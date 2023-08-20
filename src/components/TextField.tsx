import React, { FC, HTMLAttributes, InputHTMLAttributes, useId } from "react";
import { Span, Text } from "./Box";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = styled.input({
    border: "1px solid black",
    '&:focus': {
        backgroundColor: "black",
        color: "gray"
    }
});

const TextField: FC<Props> = ({ label, error, ...props }) => {

    const id = useId();
    return (
        <Span >
            <label htmlFor={id}>{label}</label>
            <Input
                id={id}
                {...props}
            />
            {error && <Text color="error" variant="small">{error}</Text>}
        </Span>
    );
}

export default TextField;