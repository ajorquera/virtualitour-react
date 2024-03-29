import { FC } from "react";
import styled from "styled-components";
import { ifProp, theme, withProp } from "styled-tools";
import Box, { BoxProps, Text } from "../Box";

export const List = styled(Box)`
    list-style: none;
    padding: 0;
    margin: 0;
` as any;

List.defaultProps = {
    as: 'ul'
}

interface ListItemProps extends BoxProps {
    last?: boolean;
    disabled?: boolean;
    bg?: string;
    onHoverBg?: string;
    onHoverColor?: string;
    clickable?: boolean;
    color?: string;
}

export const ListItem = styled(Box) <ListItemProps>`
    background-color: ${withProp('bg', color => theme(`colors.${color}`, color || 'white'))};

    ${ifProp('color', `
        color: ${withProp('color', color => theme(`colors.${color}`, color))};
    `)}
    
    ${ifProp('clickable', `
        cursor: pointer;
    `)}

    padding: 10px; 
    border-style: solid;
    border-color: ${theme('colors.black')};
    border-width: 2px;
    border-bottom: ${ifProp('last', '2px solid black', 'none')};
    

    &:hover {
        background-color: ${withProp('onHoverBg', color => theme(`colors.${color}`, color || 'black'))};
        color: ${withProp('onHoverColor', color => theme(`colors.${color}`, color || 'white'))};
    }
` as any;

ListItem.defaultProps = {
    as: 'li'
}


interface Item {
    label: string;
    disabled?: boolean;
    bg?: string;
    [key: string]: any;
}

export interface Props extends BoxProps {
    items: Item[];
    onClick?: (item: Item) => void;
    itemProps?: ListItemProps;
};

const Component: FC<Props> = ({ items, onClick, itemProps, ...props }) => {
    return (
        <List {...props}>
            {items && items.map((item, index) => (
                <ListItem
                    clickable={Boolean(!item.disabled && onClick)}
                    last={index === items.length - 1}
                    key={index}
                    onClick={() => !item.disabled && onClick && onClick(item)}
                    bg={item.bg}
                    {...itemProps}
                    {...item}
                >
                    <Text>{item.label}</Text>
                </ListItem>
            ))}
        </List>
    )
};

export default Component;
