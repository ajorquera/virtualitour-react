import { FC } from "react";
import Box, { ColorBox, Text } from "../Box";
import styled, { useTheme } from "styled-components";
import Card from "../Card";
import { Heading } from "../Text";
import Button from "../Button/Button";

interface Props {
    title: string;
    selected?: boolean;
    price: number;
    features: string[];
    monthly?: boolean;
}

const CustomText = styled(Text)`
    -webkit-text-stroke: 2px black;
`

const Plan: FC<Props> = ({ title, selected, price, features, monthly }) => {
    const { colors } = useTheme();

    return (
        <Box>
            <ColorBox border="2px solid black" style={{ width: '60%', border: '3px solid black', borderBottomWidth: 0, opacity: selected ? 1 : 0 }} margin="auto" p={2} bg="secondary" >
                <Heading textAlign="center" variant="h3">Seleccionado</Heading>
            </ColorBox>
            <Card width={400} p={0}>
                <ColorBox p={3} bg="black" >
                    <Text color="white" variant="h3">{title}</Text>
                </ColorBox>
                <Box p={3}>
                    <CustomText as="div" textAlign="center" color="success" variant="h1">
                        {price ? `${price}€/${monthly ? 'Mes' : 'Ano'}` : 'Gratis'}
                    </CustomText>

                    <Text mt={3} as="div" textAlign="center">

                        <Button variant="primary-dark" style={{ width: '90%' }} disabled={selected}>Elegir</Button>
                    </Text>

                    <Box mt={4}>
                        <ul>
                            {features.map((feature, index) => (
                                <li>
                                    <Text key={index}>{feature}</Text>
                                </li>
                            ))}
                        </ul>
                    </Box>

                </Box>
            </Card >
        </Box >
    );
}

export default Plan;