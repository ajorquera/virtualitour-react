import React, { FC, PropsWithChildren, ReactNode, createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ModalBase from "./ModalBase";

interface Opts {
    openModal?: (component: ReactNode) => void;
    isOpenModal?: boolean;
    closeModal?: () => void;
}

export const context = createContext<Opts>({});



const DialogProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const modalRef = useRef<any>();

    const openModal = (component: ReactNode) => {
        modalRef.current = component;
        setIsOpenModal(true);
    };

    const closeModal = useCallback(() => {
        modalRef.current = null;
        setIsOpenModal(false);
    }, []);


    return (
        <context.Provider value={{ openModal, closeModal, isOpenModal }}>
            {isOpenModal && createPortal(<ModalBase>{modalRef.current}</ModalBase>, document.body)}

            {children}

        </context.Provider>
    );
};

interface HookProps {
    open: () => void;
    close?: (() => void);
    isOpenModal?: boolean;
}

export const useModal = (component: ReactNode): HookProps => {
    const { openModal, closeModal, isOpenModal } = useContext(context);

    const open = useCallback(() => openModal && openModal(component), [component]);

    return { open, close: closeModal, isOpenModal };
};

export default DialogProvider;