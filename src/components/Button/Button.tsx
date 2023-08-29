import styled from "styled-components";
import { ifProp, prop, theme, withProp } from "styled-tools";
import { color, buttonStyle, compose, ColorProps, variant } from 'styled-system';
import { ButtonHTMLAttributes } from "react";
import { darken } from "polished";


export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean;
    variant?: 'primary' | 'primary-dark' | 'secondary' | 'text';
    bg?: string;
    color?: string;
    circular?: boolean;
    active?: boolean;
}

const getDisabled = (props: Props) => ({
    cursor: ifProp('disabled', 'default', 'pointer')(props),
    opacity: ifProp('disabled', 0.2)(props),
    backgroundColor: ifProp('disabled', 'gray')(props),
    border: ifProp('disabled', 'none')(props),
    color: ifProp('disabled', 'white')(props),
    boxShadow: ifProp('disabled', 'none')(props),

    '&:hover': ifProp('disabled', {
        backgroundColor: 'gray',
        color: 'white',
    })(props),
    '&:active': ifProp('disabled', {
        boxShadow: 'none',
    })(props),
});

const Button = styled.button<Props>`
    padding: 10px;
    background-color: transparent;
    textTransform: uppercase;
    font-family: ${theme('fonts.body', 'Arial')};


    border-radius: 1px;
    border-color: ${theme('colors.black', 'black')};
    border-width: 1px;
    border-style: solid;

    
    box-shadow: 1px 1px 0 0 black;
    cursor: pointer;
    
    ${ifProp('fullWidth', 'width: 100%;')}

    ${ifProp('circular', `
        border-radius: 50%;
        padding: 13px 8px;
    `)}
    
    ${ifProp('bg', props => `
        background-color: ${theme('colors.' + props.bg, props.bg)(props)};
    `)}

    ${ifProp('color', props => `
        color: ${theme('colors.' + props.color, props.color)(props)};
    `)}
    
    &:active {
        box-shadow: .5px .5px 0 0 inset black;
    }

    ${ifProp('active', `
        box-shadow: .5px .5px 0 0 inset black;
    
    `)}

    &:hover {
        background-color: ${darken(.03, 'white')};
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
            bg: prop('colors.primary', 'white'),
            color: prop('colors.white', 'black'),
            '&:hover': {
                bg: withProp(prop('colors.primary', 'white'), darken(.05)),
            }
        },
        'primary-dark': {
            bg: 'primary-dark',
            color: 'white',
            '&:hover': {
                bg: withProp('colors.primary-dark', darken(.05)),
            }
        },
        secondary: {
            bg: 'secondary',
            color: 'black',
            '&:hover': {
                bg: withProp('colors.secondary', darken(.05)),
            }
        },

        'outline-primary': {
            bg: 'white',
            color: 'black',
            '&:hover': {
                backgroundColor: 'primary',
                color: 'white',
            }
        },

        'outline-primary-dark': {
            bg: 'white',
            color: 'black',
            '&:hover': {
                backgroundColor: 'primary-dark',
                color: 'white',
            }
        },

        'outline-secondary': {
            bg: 'white',
            color: 'black',
            '&:hover': {
                backgroundColor: 'secondary',
                color: 'black',
            }
        },

        text: {
            boxShadow: 'none',
            border: 'none',
            '&:active': {
                boxShadow: 'none',
            },
            '&:hover': {
                backgroundColor: 'transparent',
            }
        },
        'outline': {
            boxShadow: '10px 10px 0 0 black',
            backgroundColor: 'surface',
            '&::first-letter': {
                color: 'error'
            }
        }
    }
})}
${getDisabled}
`



export default Button;