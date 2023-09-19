import { FC, useEffect, useState } from "react";
import Box, { BoxProps, Text } from "../Box";
import styled from "styled-components";
import Line from "./Line";

interface Props extends BoxProps {
    progress: number;
    timeout: number;
    label?: string;
    height?: number;
    onComplete: () => void;
    variant?: 'primary' | 'secondary';
}

const ProgressBar = styled.hr<{ progress?: number }>`
    transition: width 100ms linear;
    margin: 0;
    border-style: dashed;
    border-color: black;
    border-top-width: 10px;
`;


const Progress: FC<Props> = ({ progress, label, height, timeout, onComplete, variant, ...props }) => {
    const [innerProgress, setInnerProgress] = useState(0);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (timeout) {

            const step = 20;

            timeoutId = setInterval(() => {

                setInnerProgress(progress => {
                    if (progress >= 100) {
                        onComplete && onComplete();
                        clearInterval(timeoutId);
                    }

                    return (progress + step) >= 100 ? 100 : (progress + step)
                });

            }, timeout * 1000);
        }

        return () => clearInterval(timeoutId);

    }, [timeout, onComplete]);

    useEffect(() => {
        setInnerProgress(progress || 0);
    }, [progress]);


    return (
        <Box>
            <>
                {label && <Text textAlign="center" variant="h2" as="div">{label}</Text>}
                <Box borderRadius={10} border="solid 5px black" p={2}>
                    <Line height={height} width={innerProgress} variant={variant} />
                </Box >

            </>
        </Box>
    );
};

export default Progress;