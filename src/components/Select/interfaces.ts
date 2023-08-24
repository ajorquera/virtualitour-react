import { HTMLProps } from "react";

export interface Option {
    label: 'string';
    value?: 'string';
}

export interface SelectProps extends HTMLProps<HTMLElement> { }

export interface Props extends SelectProps {
    options: Option[]
    value?: string;
    label?: string;
    error?: string;
}