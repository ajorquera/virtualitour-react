// create a react switch component

import React, { ChangeEvent, useId, useState } from 'react';
import { Flex } from '../Box';

import styled from 'styled-components';
import { ifProp, theme } from 'styled-tools';

const Label = styled.label``;

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    labelPos?: 'left' | 'right';
    label?: string;
    rounded?: boolean;
    variant?: 'primary' | 'secondary' | 'tertiary';
}

const CustomSwitch = styled.div<{ rounded?: boolean, checked: boolean, variant: Props['variant'], disabled?: boolean }>`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: .4s;
    transition: .4s;
    border: 2px solid ${theme('colors.black', 'black')};

    ${ifProp('rounded', 'border-radius: 34px;')}

    ${ifProp('disabled', `
        border: 2px solid #ccc;
        cursor: default;
    `)}
    
    &:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 15px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border: 2px solid ${theme('colors.black', 'black')};

        ${ifProp('rounded', 'border-radius: 50%;')}
        ${ifProp('checked', 'transform: translateX(26px);')}
        ${ifProp('disabled', `
            border: 2px solid #ccc;
            background-color: #ccc;
        `)}

    }

    background-color: ${ifProp('checked', props => props?.theme?.colors[props?.variant || 'black'], 'white')};
`;

const Container = styled.div`
    width: 57px;
    height: 34px;
    position: relative;
    display: inline-block;

`;

const Switch: React.FC<Props> = ({ error, disabled, label, value, onChange, rounded, variant, labelPos, ...props }) => {
    const [innerValue, setValue] = useState(Boolean(value));
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(!innerValue);
        onChange?.(e);
    };

    const id = useId();

    return (
        <Flex alignItems="center">
            <>
                {labelPos === 'left' && <Label style={{ color: disabled ? 'gray' : 'black', cursor: disabled ? 'default' : 'pointer', marginRight: 3 }} htmlFor={id}>{label}</Label>}

                <Container>
                    <Label htmlFor={id}>
                        <input
                            style={{ opacity: 0, width: 0, height: 0 }}
                            {...props}
                            checked={innerValue}
                            disabled={disabled}
                            value={String(innerValue)}
                            type="checkbox"
                            onChange={onChangeInput}
                            id={id}
                        />

                        <CustomSwitch disabled={disabled} checked={innerValue} rounded={rounded} variant={variant} />

                    </Label>
                </Container>
                {labelPos === 'right' && <Label style={{ cursor: 'pointer', marginLeft: 5 }} htmlFor={id}>{label}</Label>}

            </>

        </Flex>
    );
};

Switch.defaultProps = {
    labelPos: 'left',
    variant: 'secondary',
};

export default Switch;