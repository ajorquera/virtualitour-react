// create a ContentCard component that renders a title and children prop in a Card component and use it in the Settings page to render the Profile and Plans pages. 

// Path: src/components/ContentCard.tsx

import { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material";

export interface Props {
    title: string;
    children: React.ReactNode;
}

const ContentCard: FC<Props> = ({ title, children }) => (
    <Card>
        <CardContent>
            <Typography variant="h3" component="h3" textAlign="left">
                {title}
            </Typography>
            {children}
        </CardContent>
    </Card>
)

export default ContentCard;