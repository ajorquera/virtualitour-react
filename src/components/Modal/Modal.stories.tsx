import type { Meta, StoryObj } from '@storybook/react';

import Header from './ModalBase';
import { MultipleComponentTemplate, SingleComponentTemplate } from '../../utils/templates';
import Theme from '../../Theme';
import ModalProvider, { useModal } from './ModalProvider';

import Button from '../Button/Button';
import Modal from './Modal';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Components/Modal',
    component: Modal,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Variants = MultipleComponentTemplate(Modal, [
    { title: 'Primary Modal' },
    { title: 'Secondary Modal', variant: 'secondary' },
    { title: 'Secondary Modal', variant: 'primary-dark' }
]);

const ButtonModal = () => {
    const { open } = useModal(<Modal title='This is my title' />);
    return <Button onClick={open}>Open Modal</Button>
}

export const Default = () => {
    return (
        <Theme>
            <ModalProvider>
                <ButtonModal />
            </ModalProvider>
        </Theme>
    )
}