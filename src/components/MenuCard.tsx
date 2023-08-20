
import { FC } from "react";

import Card from "./Card/Card";

interface MenuItem {
    label: string;
    path: string;
}

export interface Props {
    menu: {
        title: string;
        subItems: MenuItem[];
    };
}

const MenuCard: FC<Props> = ({ menu }) => (
    <Card>


    </Card>
)

export default MenuCard;