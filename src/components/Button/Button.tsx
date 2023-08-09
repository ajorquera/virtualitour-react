import styled from "styled-components";
import { ifProp, theme } from "styled-tools";
import { color, buttonStyle, compose, ColorProps, variant } from 'styled-system';
import { ButtonHTMLAttributes } from "react";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean;
    variant?: 'primary' | 'secondary' | 'text';
    bg?: string;
    color?: string;
}

const Button = styled.button<Props>`
    padding: 8px;
    background-color: transparent;
    textTransform: uppercase;

    border-radius: 5px;
    border-color: ${theme('colors.black', 'black')};
    border-width: 1px;
    border-style: solid;

    
    box-shadow: 1px 1px 0 0 black;
    cursor: pointer;
    
    ${ifProp('fullWidth', 'width: 100%;')}
    
    ${ifProp('bg', props => `
        background-color: ${theme('colors.' + props.bg, props.bg)(props)};
    `)}

    ${ifProp('color', props => `
        color: ${theme('colors.' + props.color, props.color)(props)};
    `)}
    
    &:active {
        box-shadow: .2px .2px 0 0 inset black;
    }

    ${ifProp('disabled', `
        cursor: default;
        background-color: ${theme('colors.disabled', 'gray')};
        box-shadow: none;
    

        &:hover {
            background-color: ${theme('colors.disabled', 'gray')};
        }
    `)}

    ${variant({
    variants: {
        primary: {
            bg: 'primary',
            color: 'white',
        },
        secondary: {
            bg: 'secondary',
            color: 'white',
        },
        text: {

            boxShadow: 'none',
            '&:active': {
                boxShadow: 'none',
            }
        }
    }
})}
`



export default Button;