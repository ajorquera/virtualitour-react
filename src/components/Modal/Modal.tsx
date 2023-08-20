
import Card from "../Card";
import Button from "../Button/Button";
import styled from "styled-components";
import { FC } from "react";
import Box, { Flex } from "../Box";

const Text = styled(Box)``;

interface Props {
    title: string;
}

const Title = styled.div`
    text-align: center;
    padding: 10px;
    border-width: 0;
    border-bottom-width: 1px;
    border-style: solid;
    color: white;
    background-color: black;
    border-radius: 6px 6px 0 0;
    font-weight: bold;
    position: relative;
`;



const Modal: FC<Props> = ({ title, ...props }) => {
    return <Card p={0} width="300px" {...props}>
        <Title>
            {title}
            <span style={{ color: 'white', position: 'absolute', right: '10px', cursor: 'pointer' }}>X</span>
        </Title>

        <Box p={2}>
            <Box mb={2}>
                Modal content Modal content Modal content Modal content Modal content Modal content Modal content Modal content
            </Box>

            <Flex justifyContent="right">
                <Button style={{ marginRight: 10 }}>Cancelar</Button>
                <Button variant="primary">Guardar</Button>
            </Flex>
        </Box>
    </Card>
}

export default Modal;