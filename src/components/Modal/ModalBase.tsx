
import Card from "../Card";
import Button from "../Button/Button";
import styled from "styled-components";
import { FC, PropsWithChildren, useContext } from "react";
import Box, { Flex, Text } from "../Box";
import { theme, withProp } from "styled-tools";
import { context } from "./ModalProvider";





const Title = styled.div`
    text-align: center;
    padding: 10px;
    border-width: 0;
    border-styled: solid;
    border-color: black;
    border-bottom-width: 3px;
    border-style: solid;
    color: ${withProp('variant', (variant: string) => variant === 'secondary' ? 'black' : 'white')};
    background-color: ${withProp('variant', (variant: string) => theme(`colors.${variant}`))};
    border-radius: 6px 6px 0 0;
    position: relative;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
`;

interface Props {
    children: JSX.Element | JSX.Element[];
}

const Modal: FC<Props> = ({ children }) => {
    const { closeModal } = useContext(context);

    return (
        <Flex justifyContent="center" alignItems="center" height="100vh">
            <>
                <Overlay onClick={closeModal} />
                <Box style={{ zIndex: 1001 }} >
                    {children}
                </Box>
            </>
        </Flex >
    )
}


export default Modal;