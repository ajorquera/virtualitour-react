import { Divider, List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";
import { FC } from "react";
import Link from "./Link";
import Card from "./Card";

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
        <nav>
            <>
                <List>
                    <ListItem>
                        <ListItemText primary={menu.title} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {menu.subItems.map((subItem) => (
                        <ListItem>
                            <ListItemButton>
                                <ListItemButton component={Link as any} href={subItem.path}>
                                    <ListItemText primary={subItem.label} />
                                </ListItemButton>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </>





        </nav>
    </Card>
)

export default MenuCard;