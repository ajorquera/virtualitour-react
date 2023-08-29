import React, { FC, PropsWithChildren, useContext } from "react";
import Card from "../Card";
import { Heading } from "../Text";
import Box, { ColorBox, Flex, Text } from "../Box";
import Button, { Props as ButtonProps } from "../Button/Button";
import { context } from "./ModalProvider";

interface Props {
    title: string;
    variant?: ButtonProps['variant'];
}

const Modal: FC<Props> = ({ title, variant, ...props }) => {
    const textColor = variant === 'secondary' ? 'black' : 'white';
    const { closeModal } = useContext(context);

    return (
        <Card elevation={5} p={0} {...props}>
            <ColorBox borderBottom="2px solid black" p={2} style={{ position: 'relative', borderBottom: '1px solid black' }} bg={variant}>
                <Heading textAlign="center" color={textColor} variant="h3">{title}</Heading>
                <Button onClick={closeModal} variant={variant} color={textColor} style={{ position: 'absolute', top: 3, right: 3, padding: 5 }}>
                    <Text>X</Text>
                </Button>
            </ColorBox>
            <Box p={3}>
                <Box mb={4}>
                    <Text>Este es el contenido del modal</Text>
                </Box>
                <Flex justifyContent="end" gap={10}>
                    <Button onClick={closeModal}>Cancelar</Button>
                    <Button variant={variant}>Guardar</Button>
                </Flex>
            </Box>
        </Card>
    )
}

Modal.defaultProps = {
    variant: 'primary'
}

export default Modal;