import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';
import Button from './Button';
import Box, { Flex, Text } from '../Box';
import List, { Props as ListProps } from '../List';
import { ReactComponent as FaceHushed } from '../../assets/face-hushed.svg';
import { ReactComponent as FaceFearful } from '../../assets/face-fearful.svg';

export interface Props {
    items: ListProps['items'];
}

const ButtonMenu: FC<Props> = ({ items, ...props }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        const close = () => setOpen(false);
        window.addEventListener('click', close);
        return () => window.removeEventListener('click', close);
    }, [open]);

    const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        setOpen(!open);
    };

    return (
        <Flex>
            <Popover open={open}>
                <PopoverTrigger>

                    <Button active={open} circular onClick={onClick}>
                        <Flex alignItems="end">
                            {!open ? <FaceFearful width={25} height={25} /> : <FaceHushed width={25} height={25} />}
                            <Text variant='small' ml={1}>▼</Text>
                        </Flex>
                    </Button>
                </PopoverTrigger>

                <PopoverContent>
                    <List
                        onClick={() => { }}
                        items={items}
                        itemProps={{ onHoverBg: 'secondary', onHoverColor: 'black' }} />
                </PopoverContent>
            </Popover>

        </Flex>
    );
};

export default ButtonMenu;