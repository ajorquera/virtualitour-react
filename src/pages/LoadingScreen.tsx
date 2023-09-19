import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import Loader from '../assets/loader.gif';
import Logo from '../assets/logo.png';
import TextAnim from '../assets/TextAnim.svg';
import Box, { Flex } from '../components/Box';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export interface Props extends PropsWithChildren {

}

const Img = styled.img`
`;

Img.defaultProps = {
    width: "100%",
};

const LoadingScreen: FC<Props> = ({ ...props }) => {
    return (
        <Container>
            <Box>
                <Img src={Logo} alt="Logo" />
                <Flex alignItems="center">
                    <Img height={200} src={TextAnim} />
                    <Box>
                        <Img width={100} src={Loader} alt="Loading..." />
                    </Box>
                </Flex>
            </Box>
        </Container >
    );
};

export default LoadingScreen;