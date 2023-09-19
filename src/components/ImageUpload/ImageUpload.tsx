import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Box, { BoxProps, Flex, Text } from '../Box';
import { ifProp } from 'styled-tools';

export interface Props {

}


interface ContainerProps extends BoxProps {
    dragging?: boolean;
}
const Container = styled(Box) <ContainerProps>`
    display: inline-block;
    position: relative;
    borderColor: gray;
    cursor: pointer;

    ${ifProp('dragging', 'borderColor: blue')}

`
Container.defaultProps = {
    borderStyle: 'dashed',
    borderRadius: 4,
    borderWidth: 2,
    padding: 3
}

const DropZone = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

const onLoadFileReader = (file: Blob) => {
    const oFReader = new FileReader();
    oFReader.readAsDataURL(file);
    return new Promise<string>((resolve, reject) => {
        oFReader.onload = (e: any) => resolve(e.target.result);
    });

}

const ImageUpload: FC<Props> = ({ ...props }) => {
    const [dragging, setDragging] = useState(false);
    const [imgSrc, setImgSrc] = useState('https://via.placeholder.com/150');
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const onDrop = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        onLoadFileReader(file).then(result => setImgSrc(result));
    }

    const onDrag = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const onBrowse = (e: any) => {

        const fileInput = fileInputRef.current;
        fileInput?.click();
    }

    const onChangeFileInput = (e: any) => {
        onLoadFileReader(e.target?.files[0]).then(result => setImgSrc(result));
    }

    return (
        <Container dragging={dragging} onClick={onBrowse}>
            <DropZone onDrop={onDrop} onDragOver={onDrag} onDragEnter={() => setDragging(true)} onDragEnd={() => setDragging(false)} />
            <Flex justifyContent="center">
                <img width={150} height={150} src={imgSrc} alt="placeholder" />

            </Flex>
            <Box>

                <Text textAlign="center">Drag and drop a new logo here or <Text style={{ cursor: 'pointer' }} variant='link' as="div">BROWSE</Text></Text>
            </Box>

            <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={onChangeFileInput} />

        </Container>

    );
};

export default ImageUpload;