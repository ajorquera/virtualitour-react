import styled from "styled-components";
import Box, { Text } from "../Box"
import React, { FC, HTMLProps, useId } from "react";
import { Props, SelectProps } from "./interfaces";


const CustomSelect = styled.select`
    width: 100%;
    padding: 5px;
    outline: 0;
    border: 2px solid black;
    border-radius: 2px;  
` as FC<SelectProps>;

const Option = styled.option<{ value?: string }>``;


const Select: FC<Props> = ({ label, error, options, ...props }) => {
    const id = useId();

    return (
        <Box display="inline-block">
            {label && <Text mb={1} variant="small" style={{ display: 'block' }} as="label" htmlFor={id}>{label}</Text>}
            <CustomSelect id={id} {...props}>
                {options.map(option => (
                    <Option value={option.value}>{option.label}</Option>
                ))}
            </CustomSelect>
            {error && <Text ml={1} mt={1} as="div" color="error" variant="small">{error}</Text>}
        </Box>
    )
};

export default Select;