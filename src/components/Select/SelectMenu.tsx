import styled from "styled-components";
import Box, { Text } from "../Box"
import React, { FC, HTMLProps, useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { Props, SelectProps } from "./interfaces";
import { Popover, PopoverContent, PopoverDescription, PopoverTrigger, usePopoverContext } from "../Popover";
import Card from "../Card";
import List from "../List/List";




const CustomSelect = styled.span`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
    padding: 5px;
    outline: 0;
    border: 2px solid black;
    border-radius: 2px;  
` as FC<SelectProps>;

const Option = styled.option<{ value?: string }>``;


const Select: FC<Props> = ({ label, error, options, value, ...props }) => {
    const id = useId();
    const selectRef = useRef<HTMLSelectElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string | undefined>(value);
    const selectedOption = useMemo(() => options.find(o => o.value === selected || o.label === selected), [selected, options]);

    const selectWidth = useMemo(() => {
        if (!selectRef.current) return 0;
        return selectRef.current.offsetWidth;
    }, [selectRef.current]);

    const toggleOpen = useCallback((open?: boolean) => {
        setIsOpen(open === undefined ? !isOpen : open);
    }, [])

    useEffect(() => {
        const close = () => toggleOpen(false);
        window.addEventListener('click', close);
        return () => window.removeEventListener('click', close);
    }, [toggleOpen]);

    const onClickSelect = useCallback((e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.stopPropagation();
        e.preventDefault();
        toggleOpen();
    }, [toggleOpen]);

    return (
        <Box display="inline-block">
            <>
                {label && <Text mb={1} variant="small" style={{ display: 'block' }} as="label" htmlFor={id}>{label}</Text>}
                <Popover placement="bottom-start" open={isOpen}>
                    <PopoverTrigger>
                        <CustomSelect ref={selectRef} onClick={onClickSelect} id={id} {...props}>
                            <Text>{selectedOption?.label}</Text>
                            <Text>{isOpen ? '▲' : '▼'}</Text>
                        </CustomSelect>
                    </PopoverTrigger>
                    <PopoverContent>
                        <List width={selectWidth} itemProps={{ onHoverBg: 'secondary', onHoverColor: 'black' }} onClick={option => setSelected(option.value)} items={options as any} />
                    </PopoverContent>
                </Popover>
                {error && <Text ml={1} mt={1} as="div" color="error" variant="small">{error}</Text>}

            </>
        </Box>
    )
};

export default Select;