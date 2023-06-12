import { FC, useEffect } from "react";
import { redirect as routerRedirect } from "react-router-dom";

export interface Props {
    href: string;
    loadPage?: boolean;
}

const Redirect: FC<Props> = ({ href, loadPage }) => {
    useEffect(() => {
        if (loadPage) {
            routerRedirect(href);
        } else {
            document.location.href = href;
        }
    }, []);

    return null;
};

export const redirect = (href: string, loadPage?: boolean) => {
    loadPage ? document.location.href = href : routerRedirect(href);
}

export default Redirect;